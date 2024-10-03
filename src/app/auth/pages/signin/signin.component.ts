import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { catchError } from 'rxjs';
import { IToken } from '../../../core/interfaces/i-token';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: ['farel', [Validators.required]],
      password: ['123123123', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
      // Prevent access when logged in.
      this.router.navigate(['admin']);
    }
  }
  onSubmit() {
    if (this.form.valid) {
      this.authenticationService
        .signIn(this.form.value)
        .pipe(catchError(this.authenticationService.baseHttp.handleError))
        .subscribe((resp: IToken) => {
          this.authenticationService.sessionStart();
          this.authenticationService.token = resp.access;
          this.router.navigate(['admin']);
        });
    }
  }
}

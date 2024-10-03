import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor (private authenticationService: AuthenticationService) {}
  ngOnInit(): void {
    console.log(this.authenticationService.isLoggedIn());

  }

}

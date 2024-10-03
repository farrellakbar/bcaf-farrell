import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { MenuNavigationComponent } from './layouts/menu-navigation/menu-navigation.component';
import { MenuAppComponent } from './layouts/menu-app/menu-app.component';



@NgModule({
  declarations: [
    MenuNavigationComponent,
    MenuAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MenuNavigationComponent,
    MenuAppComponent
  ],
  providers: [provideHttpClient()],


})
export class SharedModule { }

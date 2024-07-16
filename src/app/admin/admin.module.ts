import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LoginComponent,
    SignUpComponent
  ]
})
export class AdminModule { }

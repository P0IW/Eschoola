import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentRoutingModule,
    LoginComponent,
    SignUpComponent
  ]
})
export class StudentModule { }

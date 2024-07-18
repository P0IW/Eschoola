import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupStudentComponent } from './signup-student/signup-student.component';
import { SignupTeacherComponent } from './signup-teacher/signup-teacher.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BodyComponent } from './body/body.component';

import { RouterModule } from '@angular/router';
import { headerComponent } from './header/header.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SignupStudentComponent,
    SignupTeacherComponent,
    BodyComponent,
    headerComponent


  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    RouterModule,

]
})
export class RegistrationModule { }

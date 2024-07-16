import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    LoginComponent,
    SignUpComponent
  ]
})
export class TeacherModule { }

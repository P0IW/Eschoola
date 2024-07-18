import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BodyComponent } from './body/body.component';
import { headerComponent } from './header/header.component';
import { SignupStudentComponent } from './signup-student/signup-student.component';
import { SignupTeacherComponent } from './signup-teacher/signup-teacher.component';

const routes: Routes = [
  {path:'',component:BodyComponent, children:[
    {path:'header',component: headerComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'signup-student',component:SignupStudentComponent},
    {path:'signup-teacher',component:SignupTeacherComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path :'login/signup-student',redirectTo:'signup-student',pathMatch:'full'}


]}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }

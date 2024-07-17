import { SignupStudentComponent } from './Registration/signup-student/signup-student.component';
import { SignupTeacherComponent } from './Registration/signup-teacher/signup-teacher.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Registration/login/login.component';
import { SignupComponent } from './Registration/signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup-teacher', component: SignupTeacherComponent },
  { path: 'signup-student', component: SignupStudentComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

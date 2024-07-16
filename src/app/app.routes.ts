import { Routes } from '@angular/router';
import { LoginComponent } from './Registration/login/login.component';
import { SignupTeacherComponent } from './Registration/signup-teacher/signup-teacher.component';
import { SignupStudentComponent } from './Registration/signup-student/signup-student.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup-teacher',
        component: SignupTeacherComponent
    },
    {
        path: 'signup-student',
        component: SignupStudentComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'', redirectTo:'home', pathMatch: 'full'
    }
];

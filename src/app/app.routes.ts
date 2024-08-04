  import { NgModule } from '@angular/core';
  import { RouterModule, Routes, CanActivate } from '@angular/router';
  import { AuthGuard } from './Guards/auth.guard';
  import { LayoutComponent } from './layout/layout.component';
  import { AuthLayoutComponent } from './aut-layout/aut-layout.component';
  export const routes: Routes = [

    {
      path: '',
      component: AuthLayoutComponent, children: [
        { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
        { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), canActivate: [AuthGuard]},
        { path: 'login', loadComponent: () => import('./Registration/login/login.component').then(m => m.LoginComponent) },
        { path: 'signup', loadComponent: () => import('./Registration/signup/signup.component').then(m => m.SignupComponent) },
        { path: 'signup-teacher', loadComponent: () => import('./Registration/signup-teacher/signup-teacher.component').then(m => m.SignupTeacherComponent) },
        { path: 'signup-student', loadComponent: () => import('./Registration/signup-student/signup-student.component').then(m => m.SignupStudentComponent) },
        { path: 'signup/teacher', redirectTo: 'signup-teacher', pathMatch:'full' },
        { path: 'signup/student', redirectTo: 'signup-student', pathMatch: 'full' },
        { path: 'admin-dashboard', loadComponent: () => import('./Registration/login/admin/admin.component').then(m => m.AdminLoginComponent) },
      ]
    },
  ];

  @NgModule({               
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

  import { NgModule } from '@angular/core';
  import { RouterModule, Routes, CanActivate } from '@angular/router';
  import { AuthGuard } from './Guards/auth.guard';
  import { LayoutComponent } from './layout/layout.component';
  import { AuthLayoutComponent } from './aut-layout/aut-layout.component';

  export const routes: Routes = [

    /* {
     path: '',
      component: LayoutComponent, children: [
        { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
        { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), canActivate: [AuthGuard]},
      ]
    },*/

    {
      path:'',
      loadChildren: ()=> import ('./Registration/registration.module').then(m=>m.RegistrationModule)
    }

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

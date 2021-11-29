import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService, RouteGuardService } from './route-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    canActivate : [RouteGuardService],
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path: 'general',
    loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)
  },
  {
    path: 'manager',
    canActivate : [AuthGuardService],
    loadChildren: () => import('./management/management.module').then(m => m.ManagementModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo : 'login', pathMatch:'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

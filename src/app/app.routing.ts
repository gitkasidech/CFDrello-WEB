import{ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CanActivate } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import {HeadComponent} from './head/head.component';
import {YourdashboardComponent} from './yourdashboard/yourdashboard.component';
import {CreateComponent} from './create/create.component';
import { GettokenComponent } from './gettoken/gettoken.component';
import { CfdComponent } from './cfd/cfd.component';
import { ActivityComponent } from './activity/activity.component'
const appRoutes: Routes=[
     {
    path: '',
    component: LoginComponent
  },
  {
    path: 'gettoken/:token/:id',
    component: GettokenComponent
  },
  {
    path: 'yourdashboard',
    component: YourdashboardComponent
    ,canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreateComponent
    ,canActivate: [AuthGuard]
  },
  {
    path: 'cfd',
    component: CfdComponent
    ,canActivate: [AuthGuard]
  },
  {
    path: 'activity',
    component: ActivityComponent
    ,canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];



export const appRoutingProviders: any = [AuthGuard];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

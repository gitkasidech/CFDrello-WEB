<<<<<<< HEAD
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
import { GraphindexComponent } from './graphindex/graphindex.component'
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
    path: 'report',
    component: GraphindexComponent
    ,canActivate: [AuthGuard]
  },
  // {
  //   path: 'cfd',
  //   component: CfdComponent
  //   ,canActivate: [AuthGuard]
  // },
  // {
  //   path: 'activity',
  //   component: ActivityComponent
  //   ,canActivate: [AuthGuard]
  // },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];



export const appRoutingProviders: any = [AuthGuard];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
=======
import{ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CanActivate } from '@angular/router';
// import { provideRouter } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import {HeadComponent} from './head/head.component';
import {DashboardnameComponent} from './dashboardname/dashboardname.component';
import {CreateComponent} from './create/create.component';
import { GettokenComponent } from './gettoken/gettoken.component';
import { GraphmainComponent } from './graphmain/graphmain.component';
import { CfdComponent } from './cfd/cfd.component';

const appRoutes: Routes=[
     {
    path: '',
    component: LoginComponent
    // ,canActivate: [AuthGuard]
  },
  {
    path: 'gettoken/:token/:id',
    component: GettokenComponent
  },
  {
    path: 'yourdashboard',
    component: DashboardnameComponent
    ,canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreateComponent
    ,canActivate: [AuthGuard]
  },
  {
    path: 'graph',
    component: GraphmainComponent
    ,canActivate: [AuthGuard]
  },
  {
    path: 'cfd',
    component: CfdComponent
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
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc

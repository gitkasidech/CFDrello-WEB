import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ActivatedRoute } from '@angular/router';
import { PopupModule } from 'ng2-opd-popup';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ColorPickerModule } from 'angular2-color-picker';
import { ChartsModule } from 'ng2-charts';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { NgDateRangePickerModule } from 'ng-daterangepicker';
import { Daterangepicker } from 'ng2-daterangepicker';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
<<<<<<< HEAD
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {GoTopButtonModule} from 'ng2-go-top-button';

=======
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc


import { DataService } from './data.service';
import { AuthGuard } from './guards/index';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeadComponent } from './head/head.component';
<<<<<<< HEAD
import { YourdashboardComponent } from './yourdashboard/yourdashboard.component';
import { CreateComponent } from './create/create.component';
import { GettokenComponent } from './gettoken/gettoken.component';
import { GraphindexComponent } from './graphindex/graphindex.component';
import { CfdComponent } from './cfd/cfd.component';
import { ActivityComponent } from './activity/activity.component';
=======
import { DashboardnameComponent } from './dashboardname/dashboardname.component';
import { YourdashboardComponent } from './yourdashboard/yourdashboard.component';
import { CreateComponent } from './create/create.component';
import { GettokenComponent } from './gettoken/gettoken.component';
import { GraphmainComponent } from './graphmain/graphmain.component';
import { GraphindexComponent } from './graphindex/graphindex.component';
import { CfdComponent } from './cfd/cfd.component';
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeadComponent,
<<<<<<< HEAD
    YourdashboardComponent,
    CreateComponent,
    GettokenComponent,
    GraphindexComponent,
    CfdComponent,
    ActivityComponent,
=======
    DashboardnameComponent,
    YourdashboardComponent,
    CreateComponent,
    GettokenComponent,
    GraphmainComponent,
    GraphindexComponent,
    CfdComponent,
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    ModalModule.forRoot(),
    PopupModule.forRoot(),
    BootstrapModalModule,
    Ng2SmartTableModule,
    ColorPickerModule,
    NgDateRangePickerModule,
    MyDateRangePickerModule,
    Daterangepicker,
<<<<<<< HEAD
    ChartModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    GoTopButtonModule, 
    BrowserAnimationsModule
=======
    ChartModule
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
    

  ],
  providers: [AuthGuard, DataService, HighchartsStatic],
  bootstrap: [AppComponent]
})
export class AppModule { }



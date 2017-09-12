import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dashboardname',
  templateUrl: './dashboardname.component.html',
  styleUrls: ['./dashboardname.component.css']
})
export class DashboardnameComponent implements OnInit {


  
  constructor(private myService: DataService) { }

  ngOnInit() {
    
  }

}

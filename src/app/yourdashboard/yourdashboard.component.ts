import { Component, OnInit, Input, Output, EventEmitter, Attribute } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable, Observer } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { GettokenComponent } from '../gettoken/gettoken.component';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';



declare var Trello: any;
@Component({
  selector: 'app-yourdashboard',
  templateUrl: './yourdashboard.component.html',
  styleUrls: ['./yourdashboard.component.css'],
  
  
})
export class YourdashboardComponent implements OnInit {
  id;
  idMember;
  dashboardsname = [];

  
  constructor(public http: Http, private router: Router, private route: ActivatedRoute, private myService: DataService ) {
    //  this.route.params.subscribe(params => {
    //    console.log(params);
    //    this.id = params;
    //  })
   
    //  this.id = this.route.snapshot.params['id'];
    //  console.log("token: ",this.id);

  }
  ngOnInit() {
  
    const id = localStorage.getItem("id")
    console.log(id);
    this.myService.getBoardsLists(id)
    .subscribe((data) => {
        this.dashboardsname = data
        console.log("pull yourboards ",this.dashboardsname);
    });     
  }

 
    LinkCreate(){
      this.router.navigate(['/create']); 
    }

    sendToChart(value: any){
        console.log(value);
        localStorage.setItem("namedashboards",value);
        this.router.navigate(['/report']);
    }
    
    

  
  
}
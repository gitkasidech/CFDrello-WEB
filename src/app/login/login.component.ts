import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable, Observer } from 'rxjs';
import { AuthGuard } from '../guards/index';
import { YourdashboardComponent } from '../yourdashboard/yourdashboard.component';
import { environment } from '../../environments/environment';


declare var Trello: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
  providers: [AuthGuard]
  

})
export class LoginComponent implements OnInit {
  apiUrl: any;

  constructor(public http: Http, private router: Router) {
    this.apiUrl = environment.apiUrl;
  }

  ngOnInit() { }

  login() {
    
    if (localStorage.getItem("token")&&localStorage.getItem("id")) {
      console.log("Crazy");
      console.log(localStorage.getItem("token"));
      this.router.navigate(['/yourdashboard']);
      
    }else{
      window.location.href = this.apiUrl+"/login"
    }

  }
   
}










  
        

          


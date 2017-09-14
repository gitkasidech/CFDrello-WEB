import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
// import Trello from 'Trello';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  //@Input() avatarHash : LoginComponent;
  constructor(public http: Http, private router: Router) {}
  
  ngOnInit() {
  }
  

  logout(){
    localStorage.clear();
    // this.router.navigate(['/']);
  }
  
  // dashboard(){
  //   const id = localStorage.getItem("id")
  //   console.log(id)
  //   this.router.navigate(['/yourdashboard', id]);
  // }

}





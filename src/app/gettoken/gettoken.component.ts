import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable, Observer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'gettoken',
<<<<<<< HEAD
  template: '',
  providers: [DataService]
})
export class GettokenComponent implements OnInit {

   id;
   token;  
=======
  templateUrl: './gettoken.component.html',
  styleUrls: ['./gettoken.component.css'],
  providers: [DataService]
})
export class GettokenComponent implements OnInit {
  // @Output() token:EventEmitter<string> = new EventEmitter< string >();
  //           id:EventEmitter<string> = new EventEmitter< string >();
    id;
   token;
  
  
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
  constructor(public http: Http, private router: Router, private route: ActivatedRoute, private myService: DataService ){ 
    this.token = this.route.snapshot.params['token'];
    this.id = this.route.snapshot.params['id'];
    console.log("token: ",this.token);
    console.log("id: ",this.id);
    localStorage.setItem("token",this.token);
    localStorage.setItem("id",this.id);
    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("id"));
<<<<<<< HEAD
=======
    // this.router.navigate(['/yourdashboard']);
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
    
    this.router.navigate(['/yourdashboard', {id: this.id}]);

   }


  ngOnInit() {
 
  }
  


  
}

import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Subject } from 'rxjs/Subject';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
<<<<<<< HEAD
import { environment } from '../environments/environment';
=======

>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc


@Injectable()
export class DataService {
  private headers = new Headers({'Content-Type': 'application/json'});
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  namedashbards;
<<<<<<< HEAD
  apiUrl: any;
  constructor(public http: Http, private router: Router) {
    this.myMethod$ = this.myMethodSubject.asObservable();
    this.apiUrl = environment.apiUrl;
=======
  constructor(public http: Http, private router: Router) {
    this.myMethod$ = this.myMethodSubject.asObservable();
    
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
  }

  getBoards(id) {
    console.log("KK")
<<<<<<< HEAD
    return this.http.get(this.apiUrl+'/boards/'+id)
=======
    return this.http.get('http://104.199.181.163:30355/boards/'+id)
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
    .map((res) => res.json())
    
  }
  getList(idBoard){
<<<<<<< HEAD
    return this.http.get(this.apiUrl+'/lists/'+idBoard)
    .map((res) => res.json());
  }
  getBoardsLists(idD){
    return this.http.get(this.apiUrl + '/alldashboards/'+idD)
=======
    return this.http.get('http://104.199.181.163:30355/lists/'+idBoard)
    .map((res) => res.json());
  }
  getBoardsLists(idD){
    return this.http.get('http://104.199.181.163:30355/alldashboards/'+idD)
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
    .map((res) => res.json());
    
  }

<<<<<<< HEAD
  

  // getNameDashboards(name){
  //   console.log("Your dashboardsname is ", name);
  //   this.namedashbards = name;
  // }
=======
  getNameDashboards(name){
    console.log("Your dashboardsname is ", name);
    this.namedashbards = name;
  }
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc

  

}

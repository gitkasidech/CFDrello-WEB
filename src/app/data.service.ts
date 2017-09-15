import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Subject } from 'rxjs/Subject';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';



@Injectable()
export class DataService {
  private headers = new Headers({'Content-Type': 'application/json'});
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  namedashbards;
  constructor(public http: Http, private router: Router) {
    this.myMethod$ = this.myMethodSubject.asObservable();
    
  }

  getBoards(id) {
    console.log("KK")
    return this.http.get('http://104.199.181.163:30355/boards/'+id)
    .map((res) => res.json())
    
  }
  getList(idBoard){
    return this.http.get('http://104.199.181.163:30355/lists/'+idBoard)
    .map((res) => res.json());
  }
  getBoardsLists(idD){
    return this.http.get('http://104.199.181.163:30355/alldashboards/'+idD)
    .map((res) => res.json());
    
  }

  getNameDashboards(name){
    console.log("Your dashboardsname is ", name);
    this.namedashbards = name;
  }

  

}

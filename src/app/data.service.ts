import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Subject } from 'rxjs/Subject';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { environment } from '../environments/environment';


@Injectable()
export class DataService {
  private headers = new Headers({'Content-Type': 'application/json'});
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  namedashbards;
  apiUrl: any;
  constructor(public http: Http, private router: Router) {
    this.myMethod$ = this.myMethodSubject.asObservable();
    this.apiUrl = environment.apiUrl;
  }

  getBoards(id) {
    console.log("KK")
    return this.http.get(this.apiUrl+'/boards/'+id)
    .map((res) => res.json())
    
  }
  getList(idBoard){
    return this.http.get(this.apiUrl+'/lists/'+idBoard)
    .map((res) => res.json());
  }
  getBoardsLists(idD){
    return this.http.get(this.apiUrl + '/alldashboards/'+idD)
    .map((res) => res.json());
    
  }

  

  // getNameDashboards(name){
  //   console.log("Your dashboardsname is ", name);
  //   this.namedashbards = name;
  // }

  

}

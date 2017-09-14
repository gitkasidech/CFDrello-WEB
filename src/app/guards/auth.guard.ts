import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  localStorage: any;
  services: any;
  response: any;
  constructor(private router: Router){}

  canActivate() {
    console.log("PassCanActive");
    if (!localStorage.getItem("token")||!localStorage.getItem("id")) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
   
    // console.log("HaveToken");
    // return true;
  }
}
  // canActivate() {

  //   let keyToken = localStorage.getItem("token");
  //   console.log(keyToken);
  // if (!keyToken) {
  //   window.location.replace("");
  // }
  // else {
  //   window.location.replace("/headdashboard");
  // }


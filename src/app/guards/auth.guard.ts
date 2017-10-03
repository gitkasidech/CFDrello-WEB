import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import Trello from 'Trello';

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

  }
}
  


<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
=======
import { Component } from '@angular/core';

>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
<<<<<<< HEAD

})
export class AppComponent implements OnInit {
  busy: Promise<any>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.busy = this.http.get('...').toPromise();
  }
=======
  
})
export class AppComponent {
  
  constructor() { }
  
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
}

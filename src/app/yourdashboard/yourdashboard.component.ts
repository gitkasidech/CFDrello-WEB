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
<<<<<<< HEAD
      this.router.navigate(['/create']); 
=======
      
      // this.myService.myMethod(this.id);
      // console.log(this.id)
      // this.idMember = this.id
      // var convertedString=JSON.stringify(this.idMember)
      // var resp = convertedString.substring(7, 31);;
      // console.log(convertedString)
      // console.log(resp)
      this.router.navigate(['/create']);
      // this.http.get('http://localhost:7777/boards/'+this.id).subscribe(data => {
      //     console.log(data);
      
          
      //   }); 
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
    }

    sendToChart(value: any){
        console.log(value);
        localStorage.setItem("namedashboards",value);
<<<<<<< HEAD
        this.router.navigate(['/report']);
=======
        this.router.navigate(['/graph']);
        // var i = 0;
        // for (let items in this.dashboardsname) {
        //     if (this.dashboardsname[i]._id == value) {
        //         console.log(i)
        //         // this.InprogressName.push(this.listsUpdate[i].name)
        //         // this.InprogressId.push(this.listsUpdate[i].id)
        //         const token = localStorage.getItem("token")
        //         this.dashboardsname[i]['token'] = token;
        //         console.log('value of chart is  ', this.dashboardsname[i])

        //         const headers = new Headers();
        //         headers.append('Content-Type', 'application/json');
        //         this.http.post('http://localhost:4444/createlcad/',
        //             JSON.stringify(this.dashboardsname[i]), { headers: headers })
        //             // .map(response => response.json())
        //             .subscribe(response => {
        //                 if (response.json) {
        //                     console.log("You able to send data to DB");
        //                     console.log(response);
        //                     // this.router.navigate(['/graph']);
        //                 }else if(!response.json){
        //                     console.log("You can't send data to DB");
        //                 }
                        
        //             })
        //     } 
        //     i++;
        // }
        


>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
    }
    
    

  
  
}
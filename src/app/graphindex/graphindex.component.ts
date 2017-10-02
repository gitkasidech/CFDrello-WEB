import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-graphindex',
  templateUrl: './graphindex.component.html',
  styleUrls: ['./graphindex.component.css']
})
export class GraphindexComponent implements OnInit {
  eventClick: any;
  class1="btn btn-gray";
  class2="btn btn-default";
  nameBoards = [];
  nameShow = [];
  colorComp: string;
  colorInpro: string;
  colorBack: string;
  constructor(private myService: DataService) {

  }


  ngOnInit() {
    var event = "cfd"
    this.click1(event)
    var namedashboard = localStorage.getItem("namedashboards");
    //   console.log(namedashboard);

    const id = localStorage.getItem("id")
    //   console.log(id);
    this.myService.getBoardsLists(id)
      .subscribe((data) => {
        //   console.log("boards is ",data);
        var i = 0;
        for (let items in data) {
          if (data[i]._id == namedashboard) {
            //   console.log(data[i].name)
            this.nameShow = data[i].name
            //   console.log(data[i].colorComp)
            this.colorComp = data[i].colorComp
            //   console.log(data[i].colorInpr)
            this.colorInpro = data[i].colorInpr
            //   console.log(data[i].colorBack)
            this.colorBack = data[i].colorBack
            localStorage.setItem("colorComp", this.colorComp);
            localStorage.setItem("colorInpro", this.colorInpro);
            localStorage.setItem("colorBack", this.colorBack);
          }
          i++;
        }
      });


  }


  click1(event: any) {
    this.eventClick=event;
    console.log(this.eventClick);
    this.class1="btn btn-gray";
    this.class2="btn btn-default";
  }

  click2(event: any) {
    this.eventClick=event;
    console.log(this.eventClick);
    this.class1="btn btn-default";
    this.class2="btn btn-gray";
  }



}

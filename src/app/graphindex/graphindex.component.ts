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

    const id = localStorage.getItem("id")
    this.myService.getBoardsLists(id)
      .subscribe((data) => {
        var i = 0;
        for (let items in data) {
          if (data[i]._id == namedashboard) {
            this.nameShow = data[i].name
            this.colorComp = data[i].colorComp
            this.colorInpro = data[i].colorInpr
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

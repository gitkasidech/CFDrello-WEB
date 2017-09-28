import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Http, Response, Headers } from '@angular/http';
import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],

})
export class ActivityComponent implements OnInit {
  ch: any;
  i = 0;
  activity = [];
  dashboardsname = [];
  startDate: any;
  endDate: any;
  fullname: any;
  cardname: any;
  timeago: any;
  text: any;
  link: any;
  body: any;
  d1 = new Date()
  month1Old = this.d1.setMonth(this.d1.getMonth() - 3)
  year1 = this.d1.getFullYear()
  month1 = this.d1.getMonth() + 1
  date1 = this.d1.getDate()
  d2 = new Date()
  month2Old = this.d2.setDate(this.d2.getDate() + 1)
  month2 = this.d2.getMonth() + 1
  date2 = this.d2.getDate()
  year2 = this.d2.getFullYear()

  constructor(private http: Http, private myService: DataService) {



    const id = localStorage.getItem("id")
    // console.log(id);
    this.myService.getBoardsLists(id)
      .subscribe((data) => {
        this.dashboardsname = data
        var value = localStorage.getItem("namedashboards");
        console.log(this.dashboardsname);
        // var i = 0;
        for (let items in this.dashboardsname) {
          if (this.dashboardsname[items]._id == value) {
            const token = localStorage.getItem("token")
            this.dashboardsname[items]['token'] = token;
            console.log('value of chart is  ', this.dashboardsname[items]);
            // localStorage.setItem("idboard", this.dashboardsname[i].idBoard);
            // console.log(localStorage.getItem("idboard"));
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.http.post('http://localhost:3000/createlcad/',
              JSON.stringify(this.dashboardsname[items]), { headers: headers })
              .subscribe(data => {
                console.log(data['_body']);
                var ch = data['_body'];
                var obj = JSON.parse(ch);
                console.log("Update", obj);

              });
          }
        }
      });
    let d = new Date()
    d.setDate(d.getDate() - 1)
    let endDate = convertDates(d)
    let day = d.getDay()
    d.setDate(d.getDate() - day)
    let startDate = convertDates(d)
    let [yearS, monthS, dateS, dayS] = startDate.split('-')
    let [yearE, monthE, dateE, dayE] = endDate.split('-')
    startDate = [yearS, monthS, dateS].join('-')
    endDate = [yearE, monthE, dateE].join('-')
    this.startDate = startDate
    this.endDate = endDate
    console.log(this.startDate)
    console.log(this.endDate)
    let idBoards = localStorage.getItem("idboard")
    // const id = localStorage.getItem("id")
    // console.log(id);
    this.http.get('http://localhost:3000/getactionactivity/' + idBoards + '/' + this.startDate + '/' + this.endDate)
      .subscribe(data => {
        console.log(data);
        var ch = data['_body'];
        var obj = JSON.parse(ch);
        console.log('วันที่ ', obj);
        for(let item in obj){
          if(obj[item].data.text){
            var pr = /\*/g;
            obj[item].data.text = obj[item].data.text.replace(pr, "");
            if(obj){
              var p = /\"/g;
              obj[item].data.text = obj[item].data.text.replace(p, "");
            }
            if(obj){
              var pp = /\---/g;
              obj[item].data.text = obj[item].data.text.replace(pp, "");
            }
            if(obj){
              var br = /\\n/g;
              obj[item].data.text = obj[item].data.text.replace(/\n/g, '<br>');
            }

            if(obj){
              obj[item].data.text = obj[item].data.text.replace(/\#/g, '');
            }
            if(obj){
              obj[item].data.text = obj[item].data.text.replace(/\\/g, '');
            }
            console.log(obj[item].data.text);
          }

        }
        this.body = obj;

        this.ch = "";
        if (this.body.length == 0 && this.i == 0) {

          this.ch = "Sorry, Don't have any activities";
          this.i = 1;

        }
      });
   
  }

  DateThisWeek() {
    let d = new Date()
    d.setDate(d.getDate() - 1)
    let endDate = convertDates(d)
    let day = d.getDay()
    d.setDate(d.getDate() - day)
    let startDate = convertDates(d)
    let [yearS, monthS, dateS, dayS] = startDate.split('-')
    let [yearE, monthE, dateE, dayE] = endDate.split('-')
    startDate = [yearS, monthS, dateS].join('-')
    endDate = [yearE, monthE, dateE].join('-')
    this.startDate = startDate
    this.endDate = endDate
    console.log(this.startDate)
    console.log(this.endDate)
    let idBoards = localStorage.getItem("idboard")
    const id = localStorage.getItem("id")
    console.log(id);
    this.http.get('http://localhost:3000/getactionactivity/' + idBoards + '/' + this.startDate + '/' + this.endDate)
      .subscribe(data => {
        console.log(data);
        var ch = data['_body'];
        var obj = JSON.parse(ch);
        console.log('วันที่ ', obj);
        for(let item in obj){
          if(obj[item].data.text){
            var pr = /\*/g;
            obj[item].data.text = obj[item].data.text.replace(pr, "");
            if(obj){
              var p = /\"/g;
              obj[item].data.text = obj[item].data.text.replace(p, "");
            }
            if(obj){
              var pp = /\---/g;
              obj[item].data.text = obj[item].data.text.replace(pp, "");
            }
            if(obj){
              var br = /\\n/g;
              obj[item].data.text = obj[item].data.text.replace(/\n/g, '<br>');
            }

            if(obj){
              obj[item].data.text = obj[item].data.text.replace(/\#/g, '');
            }
            if(obj){
              obj[item].data.text = obj[item].data.text.replace(/\\/g, '');
            }
            console.log(obj[item].data.text);
          }

        }
        this.body = obj;
        this.ch = "";
        if (this.body.length == 0) {
          this.ch = "Sorry, Don't have any activities"
        }

      });

  }

  DateLastWeek() {
    let d = new Date()
    d.setDate(d.getDate() - 1)
    let day = d.getDay()
    d.setDate(d.getDate() - day)
    let endLastWeek = d
    let startLastWeek = d
    startLastWeek.setDate(startLastWeek.getDate() - 7)
    let startDate = convertDates(startLastWeek)
    endLastWeek.setDate(endLastWeek.getDate() + 6)
    let endDate = convertDates(endLastWeek)
    let [yearS, monthS, dateS, dayS] = startDate.split('-')
    let [yearE, monthE, dateE, dayE] = endDate.split('-')
    startDate = [yearS, monthS, dateS].join('-')
    endDate = [yearE, monthE, dateE].join('-')
    this.startDate = startDate
    this.endDate = endDate
    console.log(this.startDate)
    console.log(this.endDate)
    let idBoards = localStorage.getItem("idboard")
    const id = localStorage.getItem("id")
    console.log(id);
    this.http.get('http://localhost:3000/getactionactivity/' + idBoards + '/' + this.startDate + '/' + this.endDate)
      .subscribe(data => {
        console.log(data);
        var ch = data['_body'];
        var obj = JSON.parse(ch);
        console.log('วันที่ ', obj);
        for(let item in obj){
          if(obj[item].data.text){
            var pr = /\*/g;
            obj[item].data.text = obj[item].data.text.replace(pr, "");
            if(obj){
              var p = /\"/g;
              obj[item].data.text = obj[item].data.text.replace(p, "");
            }
            if(obj){
              var pp = /\---/g;
              obj[item].data.text = obj[item].data.text.replace(pp, "");
            }
            if(obj){
              var br = /\\n/g;
              obj[item].data.text = obj[item].data.text.replace(/\n/g, '<br>');
            }

            if(obj){
              obj[item].data.text = obj[item].data.text.replace(/\#/g, '');
            }
            if(obj){
              obj[item].data.text = obj[item].data.text.replace(/\\/g, '');
            }
            console.log(obj[item].data.text);
          }

        }
        this.body = obj;
        this.ch = "";
        if (this.body.length == 0) {
          this.ch = "Sorry, Don't have any activities"
        }
      });
  }

  DateThisMonth() {
    let dStart = new Date()
    let dEnd = new Date()
    let date = dStart.getDate()
    dStart.setDate(1)
    let startDate = convertDates(dStart)
    if (date != 1) {
      dEnd.setDate(dEnd.getDate() - 1)
    }
    let endDate = convertDates(dEnd)
    let [yearS, monthS, dateS, dayS] = startDate.split('-')
    let [yearE, monthE, dateE, dayE] = endDate.split('-')
    startDate = [yearS, monthS, dateS].join('-')
    endDate = [yearE, monthE, dateE].join('-')
    this.startDate = startDate
    this.endDate = endDate
    console.log(this.startDate)
    console.log(this.endDate)
    let idBoards = localStorage.getItem("idboard")
    const id = localStorage.getItem("id")
    console.log(idBoards);
    this.http.get('http://localhost:3000/getactionactivity/' + idBoards + '/' + this.startDate + '/' + this.endDate)
      .subscribe(data => {
        console.log(data);
        var ch = data['_body'];
        var obj = JSON.parse(ch);
        console.log('วันที่ ', obj);
        for(let item in obj){
          if(obj[item].data.text){
            var pr = /\*/g;
            obj[item].data.text = obj[item].data.text.replace(pr, "");
            if(obj){
              var p = /\"/g;
              obj[item].data.text = obj[item].data.text.replace(p, "");
            }
            if(obj){
              var pp = /\---/g;
              obj[item].data.text = obj[item].data.text.replace(pp, "");
            }
            if(obj){
              var br = /\\n/g;
              obj[item].data.text = obj[item].data.text.replace(/\n/g, '<br>');
            }

            if(obj){
              obj[item].data.text = obj[item].data.text.replace(/\#/g, '');
            }
            if(obj){
              obj[item].data.text = obj[item].data.text.replace(/\\/g, '');
            }
            console.log(obj[item].data.text);
          }

        }
        this.body = obj;
        this.ch = "";
        if (this.body.length == 0) {
          this.ch = "Sorry, Don't have any activities"
        }

      });
  }


  DateLastMonth() {
    let dStart = new Date()
    let dEnd = new Date()
    dStart.setDate(1)
    dStart.setMonth(dStart.getMonth() - 1)
    dEnd.setDate(1)
    dEnd.setDate(dEnd.getDate() - 1)
    let startDate = convertDates(dStart)
    let endDate = convertDates(dEnd)
    let [yearS, monthS, dateS, dayS] = startDate.split('-')
    let [yearE, monthE, dateE, dayE] = endDate.split('-')
    startDate = [yearS, monthS, dateS].join('-')
    endDate = [yearE, monthE, dateE].join('-')
    this.startDate = startDate
    this.endDate = endDate
    console.log(this.startDate)
    console.log(this.endDate)
    let idBoards = localStorage.getItem("idboard")
    const id = localStorage.getItem("id")
    console.log(id);
    this.http.get('http://localhost:3000/getactionactivity/' + idBoards + '/' + this.startDate + '/' + this.endDate)
      .subscribe(data => {
        console.log(data);
        var ch = data['_body'];
        var obj = JSON.parse(ch);
        console.log('วันที่ ', obj);
        for(let item in obj){
          if(obj[item].data.text){
            var pr = /\*/g;
            obj[item].data.text = obj[item].data.text.replace(pr, "");
            if(obj){
              var p = /\"/g;
              obj[item].data.text = obj[item].data.text.replace(p, "");
            }
            if(obj){
              var pp = /\---/g;
              obj[item].data.text = obj[item].data.text.replace(pp, "");
            }
            if(obj){
              var br = /\\n/g;
              obj[item].data.text = obj[item].data.text.replace(/\n/g, '<br>');
            }

            if(obj){
              obj[item].data.text = obj[item].data.text.replace(/\#/g, '');
            }
            if(obj){
              obj[item].data.text = obj[item].data.text.replace(/\\/g, '');
            }
            console.log(obj[item].data.text);
          }

        }
        this.body = obj;
        this.ch = "";
        if (this.body.length == 0) {
          this.ch = "Sorry, Don't have any activities"
        }
      });

  }



  private myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'yyyy-mm-dd',
    minYear: 2014,
    disableDateRanges: [
      { beginDate: { year: 1970, month: 1, day: 1 }, endDate: { year: this.year1, month: this.month1, day: this.date1 } },
      { beginDate: { year: this.year2, month: this.month2, day: this.date2 }, endDate: { year: 6000, month: 12, day: 12 } }
    ]

  };

  onDateRangeChanged(event: IMyDateRangeModel) {
    console.log(event.formatted);
    this.startDate = event.formatted.substring(0, 10)
    this.endDate = event.formatted.substring(13)
    console.log(this.startDate);
    console.log(this.endDate);
    let idBoards = localStorage.getItem("idboard")
    const id = localStorage.getItem("id")
    console.log(id);
    if (this.startDate != this.endDate) {
      this.http.get('http://localhost:3000/getactionactivity/' + idBoards + '/' + this.startDate + '/' + this.endDate)
        .subscribe(data => {
          console.log(data);
          var ch = data['_body'];
          var obj = JSON.parse(ch);
          console.log('วันที่ ', obj);
          for(let item in obj){
            if(obj[item].data.text){
              var pr = /\*/g;
              obj[item].data.text = obj[item].data.text.replace(pr, "");
              if(obj){
                var p = /\"/g;
                obj[item].data.text = obj[item].data.text.replace(p, "");
              }
              if(obj){
                var pp = /\---/g;
                obj[item].data.text = obj[item].data.text.replace(pp, "");
              }
              if(obj){
                var br = /\\n/g;
                obj[item].data.text = obj[item].data.text.replace(/\n/g, '<br>');
              }
  
              if(obj){
                obj[item].data.text = obj[item].data.text.replace(/\#/g, '');
              }
              if(obj){
                obj[item].data.text = obj[item].data.text.replace(/\\/g, '');
              }
              console.log(obj[item].data.text);
            }
  
          }
          this.body = obj;
          this.ch = "";
          if (this.body.length == 0) {
            this.ch = "Sorry, Don't have any activities"
          }
        });
    } else if (this.startDate = this.endDate) {
      console.log('WTF');
      this.http.get('http://localhost:3000/getactionactivity/' + idBoards + '/' + this.startDate + '/' + this.endDate)
        .subscribe(data => {
          console.log(data);
          var ch = data['_body'];
          var obj = JSON.parse(ch);
          for(let item in obj){
            if(obj[item].data.text){
              var pr = /\*/g;
              obj[item].data.text = obj[item].data.text.replace(pr, "");
              if(obj){
                var p = /\"/g;
                obj[item].data.text = obj[item].data.text.replace(p, "");
              }
              if(obj){
                var pp = /\---/g;
                obj[item].data.text = obj[item].data.text.replace(pp, "");
              }
              if(obj){
                var br = /\\n/g;
                obj[item].data.text = obj[item].data.text.replace(/\n/g, '<br>');
              }
  
              if(obj){
                obj[item].data.text = obj[item].data.text.replace(/\#/g, '');
              }
              if(obj){
                obj[item].data.text = obj[item].data.text.replace(/\\/g, '');
              }
              console.log(obj[item].data.text);
            }
  
          }
          this.body = obj;
          console.log(this.body);
          this.ch = "";
          if (this.body.length == 0) {
            this.ch = "Sorry, Don't have any activities"
          }

        });
    }
  }

  ngOnInit() {

  }


}
export const convertDates = (d) => {
  let month = '' + (d.getMonth() + 1)
  let date = '' + (d.getDate())
  let day = '' + (d.getDay())
  let year = d.getFullYear()
  if (month.length < 2) month = '0' + month;
  if (date.length < 2) date = '0' + date;

  const ymd = [year, month, date, day].join('-')
  return ymd
}




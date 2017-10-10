import { Component, OnInit, Attribute } from '@angular/core';
import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';
import { Daterangepicker } from 'ng2-daterangepicker';
import { DaterangepickerConfig } from 'ng2-daterangepicker';
import { DataService } from '../data.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
<<<<<<< HEAD
import { environment } from '../../environments/environment';
=======
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc

declare var jQuery: any;

@Component({
  selector: 'app-cfd',
  templateUrl: './cfd.component.html',
  // template: `<input type="text" name="daterangeInput" daterangepicker [options]="options" (selected)="selectedDate($event, daterange)" />`,
  styleUrls: ['./cfd.component.css'],

})



export class CfdComponent implements OnInit {
<<<<<<< HEAD
  apiUrl: any;
  class1 = "btn btn-info";
  class2 = "btn btn-primary";
  class3 = "btn btn-primary";
  class4 = "btn btn-primary";
  eventbtn: any;
=======
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
  end: any;
  Hours = [];
  public st: any;
  public en: any;
  rangeDate;
  Back: string;
  Inpro: string;
  Comp: string;
  private data;
  colorComp: string;
  colorInpro: string;
  colorBack: string;
  mindate: any;
  maxdate: any;
  public daterange: any = {};
  startDate: any;
  endDate: any;
  options: Object;
  errorMessage;
  idDashboards: any;
  timeStamp = [];
  dashboardsname = [];
  d1 = new Date()
<<<<<<< HEAD
  month1Old = this.d1.setMonth(this.d1.getMonth() - 3)
  year1 = this.d1.getFullYear()
  month1 = this.d1.getMonth() + 1
  date1 = this.d1.getDate()
  d2 = new Date()
  month2Old = this.d2.setDate(this.d2.getDate() + 1)
  month2 = this.d2.getMonth() + 1
  date2 = this.d2.getDate()
  year2 = this.d2.getFullYear()

  constructor(private myService: DataService, private formBuilder: FormBuilder, private http: Http) {
    this.apiUrl = environment.apiUrl;
=======
  month1Old = this.d1.setMonth(this.d1.getMonth()-3)
  year1 = this.d1.getFullYear()
  month1 = this.d1.getMonth()+1
  date1 = this.d1.getDate()
  d2 = new Date()
  month2Old = this.d2.setDate(this.d2.getDate()+1) 
  month2 = this.d2.getMonth() + 1 
  date2 = this.d2.getDate() 
  year2 = this.d2.getFullYear()

  constructor(private myService: DataService, private formBuilder: FormBuilder, private http: Http) {
    
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
    const id = localStorage.getItem("id")
    console.log(id);
    this.myService.getBoardsLists(id)
      .subscribe((data) => {
        this.dashboardsname = data
        var value = localStorage.getItem("namedashboards");
        console.log(value);
        var i = 0;
        for (let items in this.dashboardsname) {
          if (this.dashboardsname[i]._id == value) {
            const token = localStorage.getItem("token")
            this.dashboardsname[i]['token'] = token;
            console.log('value of chart is  ', this.dashboardsname[i]);
<<<<<<< HEAD
            localStorage.setItem("idboard", this.dashboardsname[i].idBoard);
            console.log(localStorage.getItem("idboard"));
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.http.post(this.apiUrl+'/createlcad/',
=======

            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.http.post('http://104.199.181.163:30355/createlcad/',
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
              JSON.stringify(this.dashboardsname[i]), { headers: headers })
              .subscribe(data => {
                console.log(data['_body']);
                var ch = data['_body'];
                var obj = JSON.parse(ch);
                console.log(obj);
                this.colorComp = localStorage.getItem("colorComp");
                this.colorInpro = localStorage.getItem("colorInpro");
                this.colorBack = localStorage.getItem("colorBack");
<<<<<<< HEAD
                if (obj.listDate) {
                  jQuery('#container').highcharts({
                    chart: {
                      type: 'area'
                    },
                    title: {
                      text: ''
                    },
                    xAxis: {
                      categories: obj.listDate,
                      labels: {
                        rotation: -45,
                        style: {
                          fontSize: '13px',
                          fontFamily: 'Verdana, sans-serif'
                        }
                      }
                    },
                    yAxis: {
                      title: {
                        text: 'Cards'
                      },
                      labels: {
                        formatter: function () {
                          return this.value;
                        }
                      }
                    },
                    tooltip: {
                      pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
                      split: true
                    },
                    plotOptions: {
                      area: {
                        stacking: 'normal',
                        lineColor: '#666666',
                        lineWidth: 1,
                        marker: {
                          enabled: false,
                          symbol: 'circle',
                          radius: 2,
                          states: {
                            hover: {
                              enabled: true
                            }
                          }
                        }
                      }
                    },
                    series: [{
                      name: 'Backlog',
                      data: obj.listBack,
                      color: this.colorBack
                    }, {
                      name: 'Inprogress',
                      data: obj.listInpr,
                      color: this.colorInpro
                    }, {
                      name: 'Complete',
                      data: obj.listComp,
                      color: this.colorComp
                    }]
                  });
                } else if (obj.dataHour) {
                  console.log(obj.dataHour)
                  let d = new Date();
                  for (let item in obj.dataHour) {
                    d.setHours(obj.dataHour[item]);
                    d.setMinutes(0);
                    let hours = '' + (d.getHours())
                    let minutes = '' + (d.getMinutes())
                    if (hours.length < 2) hours = '0' + hours;
                    if (minutes.length < 2) minutes = '0' + minutes;
                    let time = hours + ":" + minutes
                    
                    this.Hours[item] = time
                  }
                  console.log(this.Hours)
                  jQuery('#container').highcharts({
                    chart: {
                      type: 'area'
                    },
                    title: {
                      text: ''
                    },
                    xAxis: {
                      // type: 'datetime',
                      categories: this.Hours,
                      labels: {
                        rotation: -45,
                        style: {
                          fontSize: '13px',
                          fontFamily: 'Verdana, sans-serif'
                        }
                      }
                    },
                    yAxis: {
                      title: {
                        text: 'Cards'
                      },
                      labels: {
                        formatter: function () {
                          return this.value;
                        }
                      }
                    },
                    tooltip: {
                      pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
                      split: true
                    },
                    plotOptions: {
                      area: {
                        stacking: 'normal',
                        lineWidth: 1,
                        marker: {
                          enabled: false,
                          symbol: 'circle',
                          radius: 2,
                          states: {
                            hover: {
                              enabled: true
                            }
                          }
                        }
                      }
                    },
                    series: [{
                      name: 'Backlog',
                      data: obj.dataBack,
                      color: this.colorBack
                    }, {
                      name: 'Inprogress',
                      data: obj.dataInpr,
                      color: this.colorInpro
                    }, {
                      name: 'Complete',
                      data: obj.dataComp,
                      color: this.colorComp
                    }]
                  });
                }


=======
                jQuery('#container').highcharts({
                  chart: {
                    type: 'area'
                  },
                  title: {
                    text: ''
                  },
                  xAxis: {
                    categories: obj.listDate,
                    labels: {
                      rotation: -45,
                      style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                      }
                    }
                  },
                  yAxis: {
                    title: {
                      text: 'Cards'
                    },
                    labels: {
                      formatter: function () {
                        return this.value;
                      }
                    }
                  },
                  tooltip: {
                    pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
                    split: true
                  },
                  plotOptions: {
                    area: {
                      stacking: 'normal',
                      lineColor: '#666666',
                      lineWidth: 1,
                      marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                          hover: {
                            enabled: true
                          }
                        }
                      }
                    }
                  },
                  series: [{
                    name: 'Backlog',
                    data: obj.listBack,
                    color: this.colorBack
                  }, {
                    name: 'Inprogress',
                    data: obj.listInpr,
                    color: this.colorInpro
                  }, {
                    name: 'Complete',
                    data: obj.listComp,
                    color: this.colorComp
                  }]
                });
              })
          }
          i++;
        }
      });

  }

  DateThisWeek() {
    const id = localStorage.getItem("id")
    console.log(id);
    this.myService.getBoardsLists(id)
      .subscribe((data) => {
        this.dashboardsname = data
        var value = localStorage.getItem("namedashboards");
        console.log(value);
        var i = 0;
        for (let items in this.dashboardsname) {
          if (this.dashboardsname[i]._id == value) {
            const token = localStorage.getItem("token")
            this.dashboardsname[i]['token'] = token;
            console.log('value of chart is  ', this.dashboardsname[i]);

            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.http.post('http://104.199.181.163:30355/createlcad/',
              JSON.stringify(this.dashboardsname[i]), { headers: headers })
              .subscribe(data => {
                console.log(data['_body']);
                var ch = data['_body'];
                var obj = JSON.parse(ch);
                console.log(obj);
                this.colorComp = localStorage.getItem("colorComp");
                this.colorInpro = localStorage.getItem("colorInpro");
                this.colorBack = localStorage.getItem("colorBack");
                jQuery('#container').highcharts({
                  chart: {
                    type: 'area'
                  },
                  title: {
                    text: ''
                  },
                  xAxis: {
                    categories: obj.listDate,
                    labels: {
                      rotation: -45,
                      style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                      }
                    }
                  },
                  yAxis: {
                    title: {
                      text: 'Cards'
                    },
                    labels: {
                      formatter: function () {
                        return this.value;
                      }
                    }
                  },
                  tooltip: {
                    pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
                    split: true
                  },
                  plotOptions: {
                    area: {
                      stacking: 'normal',
                      lineColor: '#666666',
                      lineWidth: 1,
                      marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                          hover: {
                            enabled: true
                          }
                        }
                      }
                    }
                  },
                  series: [{
                    name: 'Backlog',
                    data: obj.listBack,
                    color: this.colorBack
                  }, {
                    name: 'Inprogress',
                    data: obj.listInpr,
                    color: this.colorInpro
                  }, {
                    name: 'Complete',
                    data: obj.listComp,
                    color: this.colorComp
                  }]
                });
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
              })
          }
          i++;
        }
      });
<<<<<<< HEAD

  }

  DateThisWeek(event) {
    this.eventbtn = event;
    this.class1 = "btn btn-info";
    this.class2 = "btn btn-primary";
    this.class3 = "btn btn-primary";
    this.class4 = "btn btn-primary";

    let d = new Date()
    d.setDate(d.getDate() - 1)
    let endDate = convertDates(d)
    let day = d.getDay()
    d.setDate(d.getDate() - day)
    let startDate = convertDates(d)
=======
    // let d = new Date()
    // d.setDate(d.getDate() - 1)
    // let endDate = convertDates(d)
    // let day = d.getDay()
    // d.setDate(d.getDate() - day)
    // let startDate = convertDates(d)
    // let [yearS, monthS, dateS, dayS] = startDate.split('-')
    // let [yearE, monthE, dateE, dayE] = endDate.split('-')
    // startDate = [yearS, monthS, dateS].join('-')
    // endDate = [yearE, monthE, dateE].join('-')
    // this.startDate = startDate
    // this.endDate = endDate
    // console.log(startDate);
    // console.log(endDate);
    // let idBoards = localStorage.getItem("namedashboards");
    // const id = localStorage.getItem("id")
    // console.log(id);
    // this.http.get('http://104.199.181.163:30355/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
    //   .subscribe(data => {
    //     console.log(data);
    //     var ch = data['_body'];
    //     var obj = JSON.parse(ch);
    //     console.log('วันที่ ', obj);
    //     this.colorComp = localStorage.getItem("colorComp");
    //     this.colorInpro = localStorage.getItem("colorInpro");
    //     this.colorBack = localStorage.getItem("colorBack");
    //     jQuery('#container').highcharts({
    //       chart: {
    //         type: 'area'
    //       },
    //       title: {
    //         text: ''
    //       },
    //       xAxis: {
    //         categories: obj.listDate,
    //         // tickmarkPlacement: 'on',
    //         labels: {
    //           rotation: -45,
    //           style: {
    //             fontSize: '13px',
    //             fontFamily: 'Verdana, sans-serif'
    //           }
    //         }
    //       },
    //       yAxis: {
    //         title: {
    //           text: 'Cards'
    //         },
    //         labels: {
    //           formatter: function () {
    //             return this.value;
    //           }
    //         }
    //       },
    //       tooltip: {
    //         pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
    //         split: true
    //       },
    //       plotOptions: {
    //         area: {
    //           stacking: 'normal',
    //           lineColor: '#666666',
    //           lineWidth: 1,
    //           marker: {
    //             enabled: false,
    //             symbol: 'circle',
    //             radius: 2,
    //             states: {
    //               hover: {
    //                 enabled: true
    //               }
    //             }
    //           }
    //         }
    //       },
    //       series: [{
    //         name: 'Backlog',
    //         data: obj.listBack,
    //         color: this.colorBack
    //       }, {
    //         name: 'Inprogress',
    //         data: obj.listInpr,
    //         color: this.colorInpro
    //       }, {
    //         name: 'Complete',
    //         data: obj.listComp,
    //         color: this.colorComp
    //       }]
    //     });
    //   });
  }

  DateLastWeek(){
    let d = new Date()
    d.setDate(d.getDate() - 1)
    // let endDate = convertDates(d)
    let day = d.getDay()
    // console.log(day)
    d.setDate(d.getDate() - day)
    let endLastWeek = d
    let startLastWeek = d
    startLastWeek.setDate(startLastWeek.getDate() -7)
    let startDate = convertDates(startLastWeek)
    endLastWeek.setDate(endLastWeek.getDate() +6)
    let endDate = convertDates(endLastWeek)
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
    let [yearS, monthS, dateS, dayS] = startDate.split('-')
    let [yearE, monthE, dateE, dayE] = endDate.split('-')
    startDate = [yearS, monthS, dateS].join('-')
    endDate = [yearE, monthE, dateE].join('-')
    this.startDate = startDate
    this.endDate = endDate
    console.log(this.startDate)
<<<<<<< HEAD
    console.log(this.endDate)
    let idBoards = localStorage.getItem("namedashboards");
    const id = localStorage.getItem("id")
    console.log(id);
    this.http.get(this.apiUrl+'/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
=======
    console.log( this.endDate)
    let idBoards = localStorage.getItem("namedashboards");
    const id = localStorage.getItem("id")
    console.log(id);
    this.http.get('http://104.199.181.163:30355/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
      .subscribe(data => {
        console.log(data);
        var ch = data['_body'];
        var obj = JSON.parse(ch);
        console.log('วันที่ ', obj);
        this.colorComp = localStorage.getItem("colorComp");
        this.colorInpro = localStorage.getItem("colorInpro");
        this.colorBack = localStorage.getItem("colorBack");
        jQuery('#container').highcharts({
          chart: {
            type: 'area'
          },
          title: {
            text: ''
          },
          xAxis: {
            categories: obj.listDate,
            // tickmarkPlacement: 'on',
            labels: {
              rotation: -45,
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          },
          yAxis: {
            title: {
              text: 'Cards'
            },
            labels: {
              formatter: function () {
                return this.value;
              }
            }
          },
          tooltip: {
            pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
            split: true
          },
          plotOptions: {
            area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: [{
            name: 'Backlog',
            data: obj.listBack,
            color: this.colorBack
          }, {
            name: 'Inprogress',
            data: obj.listInpr,
            color: this.colorInpro
          }, {
            name: 'Complete',
            data: obj.listComp,
            color: this.colorComp
          }]
        });
      });
<<<<<<< HEAD
    if (this.startDate == this.endDate) {
      console.log('WTF');
      this.http.get(this.apiUrl+'/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
        .subscribe(data => {
          console.log(data);
          var ch = data['_body'];
          var obj = JSON.parse(ch);
          console.log('เวลา ', obj.dataHour);
          let d = new Date(this.startDate);
          for (let item in obj.dataHour) {
            d.setHours(obj.dataHour[item]);
            d.setMinutes(0);
            let hours = '' + (d.getHours())
            let minutes = '' + (d.getMinutes())
            if (hours.length < 2) hours = '0' + hours;
            if (minutes.length < 2) minutes = '0' + minutes;
            let time = hours + ":" + minutes
            // console.log(hours+":"+ minutes)
            this.Hours[item] = time

          }
          console.log(this.Hours)

          this.colorComp = localStorage.getItem("colorComp");
          this.colorInpro = localStorage.getItem("colorInpro");
          this.colorBack = localStorage.getItem("colorBack");
          jQuery('#container').highcharts({
            chart: {
              type: 'area'
            },
            title: {
              text: ''
            },
            xAxis: {
              // type: 'datetime',
              categories: this.Hours,
              labels: {
                rotation: -45,
                style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
                }
              }
            },
            yAxis: {
              title: {
                text: 'Cards'
              },
              labels: {
                formatter: function () {
                  return this.value;
                }
              }
            },
            tooltip: {
              pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
              split: true
            },
            plotOptions: {
              area: {
                stacking: 'normal',
                lineWidth: 1,
                marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                    hover: {
                      enabled: true
                    }
                  }
                }
              }
            },
            series: [{
              name: 'Backlog',
              data: obj.dataBack,
              color: this.colorBack
            }, {
              name: 'Inprogress',
              data: obj.dataInpr,
              color: this.colorInpro
            }, {
              name: 'Complete',
              data: obj.dataComp,
              color: this.colorComp
            }]
          });
        });
    }
  }

  DateLastWeek() {
    this.class1 = "btn btn-primary";
    this.class2 = "btn btn-info";
    this.class3 = "btn btn-primary";
    this.class4 = "btn btn-primary";
    let d = new Date()
    d.setDate(d.getDate() - 1)
    // let endDate = convertDates(d)
    let day = d.getDay()
    // console.log(day)
    d.setDate(d.getDate() - day)
    let endLastWeek = d
    let startLastWeek = d
    startLastWeek.setDate(startLastWeek.getDate() - 7)
    let startDate = convertDates(startLastWeek)
    endLastWeek.setDate(endLastWeek.getDate() + 6)
    let endDate = convertDates(endLastWeek)
=======
  }
  
  DateThisMonth(){
    let dStart = new Date()
    let dEnd = new Date()
    let date = dStart.getDate()
    dStart.setDate(1)
    let startDate = convertDates(dStart)
    if(date!=1){
        dEnd.setDate(dEnd.getDate()-1)
    }
    let endDate = convertDates(dEnd)
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
    let [yearS, monthS, dateS, dayS] = startDate.split('-')
    let [yearE, monthE, dateE, dayE] = endDate.split('-')
    startDate = [yearS, monthS, dateS].join('-')
    endDate = [yearE, monthE, dateE].join('-')
    this.startDate = startDate
    this.endDate = endDate
    console.log(this.startDate)
<<<<<<< HEAD
    console.log(this.endDate)
    let idBoards = localStorage.getItem("namedashboards");
    const id = localStorage.getItem("id")
    console.log(id);
    this.http.get(this.apiUrl+'/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
=======
    console.log( this.endDate)
    let idBoards = localStorage.getItem("namedashboards");
    const id = localStorage.getItem("id")
    console.log(id);
    this.http.get('http://104.199.181.163:30355/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
      .subscribe(data => {
        console.log(data);
        var ch = data['_body'];
        var obj = JSON.parse(ch);
        console.log('วันที่ ', obj);
        this.colorComp = localStorage.getItem("colorComp");
        this.colorInpro = localStorage.getItem("colorInpro");
        this.colorBack = localStorage.getItem("colorBack");
        jQuery('#container').highcharts({
          chart: {
            type: 'area'
          },
          title: {
            text: ''
          },
          xAxis: {
            categories: obj.listDate,
            // tickmarkPlacement: 'on',
            labels: {
              rotation: -45,
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          },
          yAxis: {
            title: {
              text: 'Cards'
            },
            labels: {
              formatter: function () {
                return this.value;
              }
            }
          },
          tooltip: {
            pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
            split: true
          },
          plotOptions: {
            area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: [{
            name: 'Backlog',
            data: obj.listBack,
            color: this.colorBack
          }, {
            name: 'Inprogress',
            data: obj.listInpr,
            color: this.colorInpro
          }, {
            name: 'Complete',
            data: obj.listComp,
            color: this.colorComp
          }]
        });
      });
  }

<<<<<<< HEAD
  DateThisMonth() {
    this.class1 = "btn btn-primary";
    this.class2 = "btn btn-primary";
    this.class3 = "btn btn-info";
    this.class4 = "btn btn-primary";
    let dStart = new Date()
    let dEnd = new Date()
    let date = dStart.getDate()
    dStart.setDate(1)
    let startDate = convertDates(dStart)
    if (date != 1) {
      dEnd.setDate(dEnd.getDate() - 1)
    }
=======
  DateLastMonth(){
    let dStart = new Date()
    let dEnd = new Date()
    dStart.setDate(1)
    dStart.setMonth(dStart.getMonth()-1)
    dEnd.setDate(1)
    dEnd.setDate(dEnd.getDate()-1)
    let startDate = convertDates(dStart)
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
    let endDate = convertDates(dEnd)
    let [yearS, monthS, dateS, dayS] = startDate.split('-')
    let [yearE, monthE, dateE, dayE] = endDate.split('-')
    startDate = [yearS, monthS, dateS].join('-')
    endDate = [yearE, monthE, dateE].join('-')
    this.startDate = startDate
    this.endDate = endDate
    console.log(this.startDate)
<<<<<<< HEAD
    console.log(this.endDate)
    let idBoards = localStorage.getItem("namedashboards");
    const id = localStorage.getItem("id")
    console.log(id);
    this.http.get(this.apiUrl+'/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
=======
    console.log( this.endDate)
    let idBoards = localStorage.getItem("namedashboards");
    const id = localStorage.getItem("id")
    console.log(id);
    this.http.get('http://104.199.181.163:30355/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
      .subscribe(data => {
        console.log(data);
        var ch = data['_body'];
        var obj = JSON.parse(ch);
        console.log('วันที่ ', obj);
        this.colorComp = localStorage.getItem("colorComp");
        this.colorInpro = localStorage.getItem("colorInpro");
        this.colorBack = localStorage.getItem("colorBack");
        jQuery('#container').highcharts({
          chart: {
            type: 'area'
          },
          title: {
            text: ''
          },
          xAxis: {
            categories: obj.listDate,
            // tickmarkPlacement: 'on',
            labels: {
              rotation: -45,
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          },
          yAxis: {
            title: {
              text: 'Cards'
            },
            labels: {
              formatter: function () {
                return this.value;
              }
            }
          },
          tooltip: {
            pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
            split: true
          },
          plotOptions: {
            area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: [{
            name: 'Backlog',
            data: obj.listBack,
            color: this.colorBack
          }, {
            name: 'Inprogress',
            data: obj.listInpr,
            color: this.colorInpro
          }, {
            name: 'Complete',
            data: obj.listComp,
            color: this.colorComp
          }]
        });
      });
<<<<<<< HEAD
    if (this.startDate == this.endDate) {
      console.log('WTF');
      this.http.get(this.apiUrl+'/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
=======
    
  }

  
  
  private myDateRangePickerOptions: IMyDrpOptions = {
  
    dateFormat: 'yyyy-mm-dd',
    minYear: 2014,
    disableDateRanges: [
      {beginDate: {year: 1970, month: 1, day: 1}, endDate: {year: this.year1, month: this.month1, day: this.date1}},
      {beginDate: {year: this.year2, month: this.month2, day: this.date2}, endDate: {year: 6000, month: 12, day: 12}}
  ]
  
  };

  onDateRangeChanged(event: IMyDateRangeModel) {
    console.log(event.formatted);
    this.startDate = event.formatted.substring(0, 10)
    this.endDate = event.formatted.substring(13)
    console.log(this.startDate);
    console.log(this.endDate);
    let idBoards = localStorage.getItem("namedashboards");
    const id = localStorage.getItem("id")
    console.log(id);
    if (this.startDate != this.endDate) {
      this.http.get('http://104.199.181.163:30355/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
        .subscribe(data => {
          console.log(data);
          var ch = data['_body'];
          var obj = JSON.parse(ch);
<<<<<<< HEAD
          console.log('เวลา ', obj.dataHour);
          let d = new Date(this.startDate);
          for (let item in obj.dataHour) {
            d.setHours(obj.dataHour[item]);
            d.setMinutes(0);
            let hours = '' + (d.getHours())
            let minutes = '' + (d.getMinutes())
            if (hours.length < 2) hours = '0' + hours;
            if (minutes.length < 2) minutes = '0' + minutes;
            let time = hours + ":" + minutes
            // console.log(hours+":"+ minutes)
            this.Hours[item] = time

          }
          console.log(this.Hours)

=======
          console.log('วันที่ ', obj);
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
          this.colorComp = localStorage.getItem("colorComp");
          this.colorInpro = localStorage.getItem("colorInpro");
          this.colorBack = localStorage.getItem("colorBack");
          jQuery('#container').highcharts({
            chart: {
              type: 'area'
            },
            title: {
              text: ''
            },
            xAxis: {
<<<<<<< HEAD
              // type: 'datetime',
              categories: this.Hours,
=======
              categories: obj.listDate,
              // tickmarkPlacement: 'on',
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
              labels: {
                rotation: -45,
                style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
                }
              }
            },
            yAxis: {
              title: {
                text: 'Cards'
              },
              labels: {
                formatter: function () {
                  return this.value;
                }
              }
            },
            tooltip: {
              pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
              split: true
            },
            plotOptions: {
              area: {
                stacking: 'normal',
                lineWidth: 1,
                marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                    hover: {
                      enabled: true
                    }
                  }
                }
              }
            },
            series: [{
              name: 'Backlog',
<<<<<<< HEAD
              data: obj.dataBack,
              color: this.colorBack
            }, {
              name: 'Inprogress',
              data: obj.dataInpr,
              color: this.colorInpro
            }, {
              name: 'Complete',
              data: obj.dataComp,
=======
              data: obj.listBack,
              color: this.colorBack
            }, {
              name: 'Inprogress',
              data: obj.listInpr,
              color: this.colorInpro
            }, {
              name: 'Complete',
              data: obj.listComp,
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
              color: this.colorComp
            }]
          });
        });
<<<<<<< HEAD
    }
  }

  DateLastMonth() {
    this.class1 = "btn btn-primary";
    this.class2 = "btn btn-primary";
    this.class3 = "btn btn-primary";
    this.class4 = "btn btn-info";
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
    let idBoards = localStorage.getItem("namedashboards");
    const id = localStorage.getItem("id")
    console.log(id);
    this.http.get(this.apiUrl+'/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
=======
    }else if (this.startDate = this.endDate) {
      console.log('WTF');
      this.http.get('http://104.199.181.163:30355/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
      .subscribe(data => {
        console.log(data);
        var ch = data['_body'];
        var obj = JSON.parse(ch);
<<<<<<< HEAD
        console.log('วันที่ ', obj);
=======
        console.log('เวลา ', obj.dataHour);
        let d = new Date(this.startDate);
        for(let item in obj.dataHour){
          d.setHours(obj.dataHour[item]);
          d.setMinutes(0);
          let hours = '' + (d.getHours())
          let minutes = '' + (d.getMinutes())
          if (hours.length < 2) hours = '0' + hours;
          if (minutes.length < 2) minutes = '0' + minutes;
          let time = hours+":"+ minutes
          console.log(hours+":"+ minutes)
          this.Hours[item] = time
          
        }
        console.log(this.Hours)
        
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
        this.colorComp = localStorage.getItem("colorComp");
        this.colorInpro = localStorage.getItem("colorInpro");
        this.colorBack = localStorage.getItem("colorBack");
        jQuery('#container').highcharts({
          chart: {
            type: 'area'
          },
          title: {
            text: ''
          },
          xAxis: {
<<<<<<< HEAD
            categories: obj.listDate,
            // tickmarkPlacement: 'on',
=======
            // type: 'datetime',
            categories: this.Hours,
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
            labels: {
              rotation: -45,
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          },
          yAxis: {
            title: {
              text: 'Cards'
            },
            labels: {
              formatter: function () {
                return this.value;
              }
            }
          },
          tooltip: {
            pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
            split: true
          },
          plotOptions: {
            area: {
              stacking: 'normal',
<<<<<<< HEAD
              lineColor: '#666666',
=======
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
              lineWidth: 1,
              marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: [{
            name: 'Backlog',
<<<<<<< HEAD
            data: obj.listBack,
            color: this.colorBack
          }, {
            name: 'Inprogress',
            data: obj.listInpr,
            color: this.colorInpro
          }, {
            name: 'Complete',
            data: obj.listComp,
=======
            data: obj.dataBack,
            color: this.colorBack
          }, {
            name: 'Inprogress',
            data: obj.dataInpr,
            color: this.colorInpro
          }, {
            name: 'Complete',
            data: obj.dataComp,
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
            color: this.colorComp
          }]
        });
      });
<<<<<<< HEAD

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
    this.class1 = "btn btn-primary";
    this.class2 = "btn btn-primary";
    this.class3 = "btn btn-primary";
    this.class4 = "btn btn-primary";
    console.log(event.formatted);
    this.startDate = event.formatted.substring(0, 10)
    this.endDate = event.formatted.substring(13)
    console.log(this.startDate);
    console.log(this.endDate);
    let idBoards = localStorage.getItem("namedashboards");
    const id = localStorage.getItem("id")
    console.log(id);
    if (this.startDate != this.endDate) {
      this.http.get(this.apiUrl+'/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
        .subscribe(data => {
          console.log(data);
          var ch = data['_body'];
          var obj = JSON.parse(ch);
          console.log('วันที่ ', obj);
          this.colorComp = localStorage.getItem("colorComp");
          this.colorInpro = localStorage.getItem("colorInpro");
          this.colorBack = localStorage.getItem("colorBack");
          jQuery('#container').highcharts({
            chart: {
              type: 'area'
            },
            title: {
              text: ''
            },
            xAxis: {
              categories: obj.listDate,
              // tickmarkPlacement: 'on',
              labels: {
                rotation: -45,
                style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
                }
              }
            },
            yAxis: {
              title: {
                text: 'Cards'
              },
              labels: {
                formatter: function () {
                  return this.value;
                }
              }
            },
            tooltip: {
              pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
              split: true
            },
            plotOptions: {
              area: {
                stacking: 'normal',
                lineWidth: 1,
                marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                    hover: {
                      enabled: true
                    }
                  }
                }
              }
            },
            series: [{
              name: 'Backlog',
              data: obj.listBack,
              color: this.colorBack
            }, {
              name: 'Inprogress',
              data: obj.listInpr,
              color: this.colorInpro
            }, {
              name: 'Complete',
              data: obj.listComp,
              color: this.colorComp
            }]
          });
        });
    } else if (this.startDate == this.endDate) {
      console.log('WTF');
      this.http.get(this.apiUrl+'/dateactioncards/' + idBoards + '/' + this.startDate + '/' + this.endDate)
        .subscribe(data => {
          console.log(data);
          var ch = data['_body'];
          var obj = JSON.parse(ch);
          console.log('เวลา ', obj.dataHour);
          let d = new Date(this.startDate);
          for (let item in obj.dataHour) {
            d.setHours(obj.dataHour[item]);
            d.setMinutes(0);
            let hours = '' + (d.getHours())
            let minutes = '' + (d.getMinutes())
            if (hours.length < 2) hours = '0' + hours;
            if (minutes.length < 2) minutes = '0' + minutes;
            let time = hours + ":" + minutes
            // console.log(hours+":"+ minutes)
            this.Hours[item] = time

          }
          console.log(this.Hours)

          this.colorComp = localStorage.getItem("colorComp");
          this.colorInpro = localStorage.getItem("colorInpro");
          this.colorBack = localStorage.getItem("colorBack");
          jQuery('#container').highcharts({
            chart: {
              type: 'area'
            },
            title: {
              text: ''
            },
            xAxis: {
              // type: 'datetime',
              categories: this.Hours,
              labels: {
                rotation: -45,
                style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
                }
              }
            },
            yAxis: {
              title: {
                text: 'Cards'
              },
              labels: {
                formatter: function () {
                  return this.value;
                }
              }
            },
            tooltip: {
              pointFormat: '{series.name} <b>{point.y:,.0f}</b>',
              split: true
            },
            plotOptions: {
              area: {
                stacking: 'normal',
                lineWidth: 1,
                marker: {
                  enabled: false,
                  symbol: 'circle',
                  radius: 2,
                  states: {
                    hover: {
                      enabled: true
                    }
                  }
                }
              }
            },
            series: [{
              name: 'Backlog',
              data: obj.dataBack,
              color: this.colorBack
            }, {
              name: 'Inprogress',
              data: obj.dataInpr,
              color: this.colorInpro
            }, {
              name: 'Complete',
              data: obj.dataComp,
              color: this.colorComp
            }]
          });
        });
=======
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc
    }
  }

  ngOnInit() {
<<<<<<< HEAD

  }



=======
    
  }

  
 
>>>>>>> 6532751c763079bdc40436973321b85ffff3e4bc

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

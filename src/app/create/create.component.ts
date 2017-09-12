import { Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GettokenComponent } from '../gettoken/gettoken.component';
import {ColorPickerDirective, ColorPickerService, Rgba} from 'angular2-color-picker'





import { YourdashboardComponent } from '../yourdashboard/yourdashboard.component';

declare var Trello: any;

export class Cmyk {
    constructor(public c: number, public m: number, public y: number, public k: number) { }
}

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styles: ['input.ng-invalid{border-left:5px solid red;}'],

    providers: [Modal, DataService],

})
export class CreateComponent implements OnInit {

    boards = null;
    name = "untitle dashboards";
    comColor = "#4ac216";
    inColor = "#ffff15";
    backColor = "#ff0000";
    listsId = [];
    list = [];
    listcards = [];
    listsUpdate = [];
    CompleteName = [];
    CompleteId = [];
    Complete = [];
    InprogressName = [];
    InprogressId = [];
    Inprogress = [];
    BacklogName = [];
    BacklogId = [];
    Backlog = [];
    dashboardsForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public http: Http,
        private router: Router,
        public modal: Modal,
        private myService: DataService,
        private route: ActivatedRoute,
        private cpService: ColorPickerService
    ) { 
        this.arrayColors['color'] = '#2883e9';
        this.arrayColors['color2'] = '#e920e9';
        this.arrayColors['color3'] = 'rgb(255,245,0)';
        this.arrayColors['color4'] = 'rgb(236,64,64)';
        this.arrayColors['color5'] = 'rgba(45,208,45,1)';
    }

    private color: string = '#2889e9';
    private color2: string = "hsla(300,82%,52%)";
    private color3: string = "#fff500";
    private color4: string = "rgb(236,64,64)";
    private color5: string = "rgba(45,208,45,1)";
    private color6: string = "#1973c0";
    private color7: string = "#f200bd";
    private color8: string = "#a8ff00";
    private color9: string = "#278ce2";
    private color10: string = "#0a6211";
    private color11: string = "#f2ff00";
    private color12: string = "#f200bd";
    private color13: string = "#1973c0";
    private color14: string = "#a8ff00";
    private color15: string = "#a51ad6a3";

    private arrayColors: any = {};
    private selectedColor: string = 'color';

    private toggle: boolean;
    private toggle2: boolean;
    private lastColor = '#ff0';
    private cmyk: Cmyk = new Cmyk(0, 0, 0, 0);

    onChangeColor(color: string): Cmyk {
        return this.rgbaToCmyk(this.cpService.hsvaToRgba(this.cpService.stringToHsva(color)));
    }

    rgbaToCmyk(rgba: Rgba): Cmyk {
        let cmyk: Cmyk = new Cmyk(0, 0, 0, 0), k: number;
        k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k == 1) return new Cmyk(0, 0, 0, 1);
        cmyk.c = (1 - rgba.r - k) / (1 - k);
        cmyk.m = (1 - rgba.g - k) / (1 - k);
        cmyk.y = (1 - rgba.b - k) / (1 - k);
        cmyk.k = k;
        return cmyk;
    }

    onChangeColorHex8(color: string): string {
        return this.cpService.outputFormat(this.cpService.stringToHsva(color, true), 'rgba', true);
    }

// ================================================== Create Dasboards =============================================================
    onSubmit(value: any) {
        const id = localStorage.getItem("id")
        
        value["idMember"] = id;
        value["listComp"] = this.CompleteId
        value["listInpr"] = this.InprogressId
        value["listBack"] = this.BacklogId
        if (value.colorComp == value.colorInpr || value.colorComp == value.colorBack || value.colorInpr == value.colorBack) {
            return alert("Color should not same")
        }
        if (value.listComp.length==0 || value.listInpr.length==0  || value.listBack.length==0 ) {
            return alert("Lists should not null")
        }
        console.log(value);

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:4444/dashboards',
            JSON.stringify(value), { headers: headers })
            .map(response => response.json())
            .subscribe(response => {
                if (response.json) {
                    this.router.navigate(['/yourdashboard']);
                    // this.routes.navigate(['/yourdashboard']);
                } else {
                  
                    this.router.navigate(['/yourdashboard']);
                }
            })
    }

    setName(name: string) {
        console.log(name)
    }

    selectBoards(selectedValue: string) {
        this.CompleteName = [];
        this.CompleteId = [];
        this.Complete = [];
        this.InprogressName = [];
        this.InprogressId = [];
        this.Inprogress = [];
        this.BacklogName = [];
        this.BacklogId = [];
        this.Backlog = [];
        if (selectedValue) {
            console.log('value is ', selectedValue);
            this.myService.getList(selectedValue)
                .subscribe((data) => {
                    this.listcards = data
                    this.listsUpdate = this.listcards
                    console.log(this.listsUpdate);

                });
        }
    }


    completeCards(complete: string) {
        console.log(complete.length);
        console.log(complete);
        if (complete.length == 29) {
            var complete = complete.substring(4, 28);
        } else if (complete.length == 30) {
            var complete = complete.substring(5, 29);
        } else if (complete.length == 31) {
            var complete = complete.substring(6, 30);
        }

        console.log(complete);
        var i = 0;
        for (let items in this.listsUpdate) {
            if (this.listsUpdate[i].id == complete ) {
                console.log(i)
                this.CompleteName.push(this.listsUpdate[i].name)
                this.CompleteId.push(this.listsUpdate[i].id)
                this.Complete.push(this.listsUpdate[i])
                this.listsUpdate.splice(i, 1)
                console.log('value of Complete_Id is  ', this.CompleteId)
                console.log('value of Complete_Name is  ', this.CompleteName)
            } i++;
        }
    }

    selectedComplete(valueComplete: string){
        console.log(valueComplete)
        var i = 0;
        for (let items in this.Complete) {
            if (this.Complete[i].id == valueComplete) {
                console.log(i)
                this.listsUpdate.push(this.Complete[i])
                this.Complete.splice(i, 1)
                this.CompleteId.splice(i, 1)
                this.CompleteName.splice(i, 1)
                console.log('value of Complete_Id is  ', this.CompleteId)
                console.log('value of Complete_Name is  ', this.CompleteName)
            } i++;
        }
        
        
    }


    inprogressCards(inprogress: string) {
        if (inprogress.length == 29) {
            var inprogress = inprogress.substring(4, 28);
        } else if (inprogress.length == 30) {
            var inprogress = inprogress.substring(5, 29);
        } else if (inprogress.length == 31) {
            var inprogress = inprogress.substring(6, 30);
        }
        var i = 0;
        for (let items in this.listsUpdate) {
            if (this.listsUpdate[i].id == inprogress) {
                console.log(i)
                this.InprogressName.push(this.listsUpdate[i].name)
                this.InprogressId.push(this.listsUpdate[i].id)
                this.Inprogress.push(this.listsUpdate[i])
                this.listsUpdate.splice(i, 1)
                console.log('value of InprogressId is  ', this.InprogressId)
                console.log('value of InprogressName is  ', this.InprogressName)
            } i++;
        }
        
    }

    selectedInprogress(valueInprogress: any){
        var i = 0;
        for (let items in this.Inprogress) {
            if (this.Inprogress[i].id == valueInprogress) {
                console.log(i)
                // this.InprogressName.push(this.listsUpdate[i].name)
                // this.InprogressId.push(this.listsUpdate[i].id)
                this.listsUpdate.push(this.Inprogress[i])
                this.Inprogress.splice(i, 1)
                this.InprogressId.splice(i, 1)
                this.InprogressName.splice(i, 1)
                console.log('value of InprogressId is  ', this.InprogressId)
                console.log('value of InprogressName is  ', this.InprogressName)
            } i++;
        }
    }

    backlogCards(backlog: string) {
        if (backlog.length == 29) {
            var backlog = backlog.substring(4, 28);
        } else if (backlog.length == 30) {
            var backlog = backlog.substring(5, 29);
        } else if (backlog.length == 31) {
            var backlog = backlog.substring(6, 30);
        }
        var i = 0;
        for (let items in this.listsUpdate) {
            if (this.listsUpdate[i].id == backlog) {
                console.log(i)
                this.BacklogName.push(this.listsUpdate[i].name)
                this.BacklogId.push(this.listsUpdate[i].id)
                this.Backlog.push(this.listsUpdate[i])
                this.listsUpdate.splice(i, 1)
                console.log('value of BacklogId is  ', this.BacklogId)
                console.log('value of BacklogName is  ', this.BacklogName)
            } i++;
        }
        
    }

    selectedBacklog(valueBacklog: any){
        var i = 0;
        for (let items in this.Backlog) {
            if (this.Backlog[i].id == valueBacklog) {
                console.log(i)
                // this.BacklogName.push(this.listsUpdate[i].name)
                // this.BacklogId.push(this.listsUpdate[i].id)
                this.listsUpdate.push(this.Backlog[i])
                this.Backlog.splice(i, 1)
                this.BacklogId.splice(i, 1)
                this.BacklogName.splice(i, 1)
                console.log('value of BacklogId is  ', this.BacklogId)
                console.log('value of BacklogName is  ', this.BacklogName)
            } i++;
        }
    }

   

    ngOnInit() {
        const id = localStorage.getItem("id")
        console.log(id)
        this.myService.getBoards(id)
            .subscribe((data) => {
                this.boards = data;
                // this.boards.unshift( {id: null, name: "Select yourboards"})
                console.log("Tawan")
                console.log(this.boards);
        });
    }



}

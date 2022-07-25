import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navcomp',
  templateUrl: './navcomp.component.html',
  styleUrls: ['./navcomp.component.css']
})
export class NavcompComponent implements OnInit {
 
  takethetextcontent!:string;
  constructor(public element:DataService) { }

  ngOnInit(): void {
  }
  editlabilsbutton(){
    this.element.editlabelsshow=!this.element.editlabelsshow;
  }
  textcontent(el:any){
    this.element.takethetextcontent=el.target.innerText;
     console.log(this.takethetextcontent);
  }
}

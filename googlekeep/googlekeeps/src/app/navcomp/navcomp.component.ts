import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navcomp',
  templateUrl: './navcomp.component.html',
  styleUrls: ['./navcomp.component.css']
})
export class NavcompComponent implements OnInit {
 
  @Output() takethetextcontent=new EventEmitter<string>();;
  constructor(public element:DataService) { }

  ngOnInit(): void {
  }
  // getelementlist(value:any){
  //   this.keepElementsList=value.target.innerText;
  // }
  editlabilsbutton(){
    this.element.editlabelsshow=!this.element.editlabelsshow;
  }
  textcontent(el:any){
    this.element.takethetextcontent=el.target.innerText;
     console.log(this.takethetextcontent);
  }
}

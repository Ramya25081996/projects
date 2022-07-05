import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-editlabels',
  templateUrl: './editlabels.component.html',
  styleUrls: ['./editlabels.component.css']
})
export class EditlabelsComponent implements OnInit {

  constructor(public element:DataService) { }

  ngOnInit(): void {
  }
  closebutton(){
    this.element.editlabelsshow=!this.element.editlabelsshow;
  }
  createEditLabels="";
  @ViewChild('ediptlabelinput') inputValue1!:ElementRef;
  getEditLabelsValue(){
    this.createEditLabels=((this.inputValue1.nativeElement)as HTMLInputElement).value;
    console.log(this.createEditLabels)
    this.element.getEditlabelvalue(this.createEditLabels);
    // console.log(this.createEditLabels);
}
}

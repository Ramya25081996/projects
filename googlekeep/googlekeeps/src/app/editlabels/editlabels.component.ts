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
  createEditLabels!:string;
  @ViewChild('ediptlabelinput') inputValue1!:ElementRef;
  getEditLabelsValue(){
    this.createEditLabels=((this.inputValue1.nativeElement)as HTMLInputElement).value;
    if(this.createEditLabels==""){
      alert("enter the input");
    }
    else{
       this.element.getEditlabelvalue(this.createEditLabels);
    }
}
deleteEditLabels(index1:any){
        this.element.keepNotesValue.editLabelArray.splice(index1,1);
}
}
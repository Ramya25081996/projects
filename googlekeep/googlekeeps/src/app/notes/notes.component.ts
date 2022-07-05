import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  private labelpath: any;
  constructor(public element: DataService, private route: ActivatedRoute) {

    this.route.paramMap.subscribe((param) => {
      this.labelpath= param.get('id')
      console.log(this.labelpath)
      if (window.location.pathname==="/keeps") {
        console.log(this.element.keepNotesValue.textNoteArray)
        this.element.selectedvalue = this.element.keepNotesValue.textNoteArray
      }
      if(window.location.pathname==="/remainder") {
        this.element.selectedvalue = this.element.keepNotesValue.remainerArray;
      }
      if(window.location.pathname==="/archive") {
        this.element.selectedvalue = this.element.keepNotesValue.archiveArray;
      }
      else {
        console.log(this.labelpath)
        let array: {}[]
        this.element.keepNotesValue.editLabelArray.filter(x => {
          if (x.c === this.labelpath) {
            this.element.selectedvalue = x.notes;
            console.log(this.element.selectedvalue)
          }
        })
      }
    })
    
  }

  ngOnInit(): void {
  }
  getvalue() {
    this.element.noteshighlight = !this.element.noteshighlight;
  }
  val1!: string;
  val2!: string;
  val3!: string;
  @ViewChild('inputvalue0') inputValue1!: ElementRef;
  @ViewChild('inputvalue') inputValue2!: ElementRef;
  @ViewChild('inputvalue1') inputValue3!: ElementRef;
  gettextvalue() {
    this.val1 = ((this.inputValue1.nativeElement) as HTMLInputElement).value;
    this.val2 = ((this.inputValue2.nativeElement) as HTMLInputElement).innerText;
    this.val3=((this.inputValue3.nativeElement) as HTMLInputElement).value;
   
    if(this.val1 =="" && this.val2 =="" && this.val3 ==""){
      alert("please enters the input,inputs are empty")
    }
    else{
      this.element.getkeepstextvalue(this.val1, this.val2,this.val3);
   }

  }
}


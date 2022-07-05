import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edittextcomp',
  templateUrl: './edittextcomp.component.html',
  styleUrls: ['./edittextcomp.component.css']
})
export class EdittextcompComponent implements OnInit {
@Input() editlist="";
  constructor() { }

  ngOnInit(): void {
  }

}

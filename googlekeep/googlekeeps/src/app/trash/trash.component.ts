import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  constructor(public element:DataService) { }

  ngOnInit(): void {
  }
  emptyTrash(){
    this.element.deletedvalue.splice(this.element.deletedvalue,this.element.deletedvalue.length);
    console.log(this.element.deletedvalue);
}
}

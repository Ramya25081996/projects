import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-trashchild',
  templateUrl: './trashchild.component.html',
  styleUrls: ['./trashchild.component.css']
})
export class TrashchildComponent implements OnInit {
@Input() deletedElement!:any;
@Input() deleteItems!:any;
  constructor(public element:DataService) { }

  ngOnInit(): void {
  }
  
  deletetrashitems(deleteItems:any){
    this.element.deletedElementFromTrash(deleteItems);
  }
}

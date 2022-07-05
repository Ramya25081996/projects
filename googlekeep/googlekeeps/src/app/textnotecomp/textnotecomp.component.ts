import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-textnotecomp',
  templateUrl: './textnotecomp.component.html',
  styleUrls: ['./textnotecomp.component.css']
})
export class TextnotecompComponent implements OnInit {
  @Input() list1:any;
  @Input() indexvalue:any;
  dateValue=Date.now();
  constructor(public element:DataService) { }

  ngOnInit(): void {
  }
   removeelement(indexvalue:any){
      this.element.deleteElement(indexvalue);
   }
}

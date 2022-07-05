import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-headercomp',
  templateUrl: './headercomp.component.html',
  styleUrls: ['./headercomp.component.css']
})
export class HeadercompComponent implements OnInit {
     textvalue:any="";
  constructor(public element:DataService) { }

  ngOnInit(): void {
  }
  reload(){
    window.location.reload();
  }
  menuiconclick(){
    this.element.menuIconHighlight=!this.element.menuIconHighlight;
  }
  searchValue:any;
 
  getSearchElement(value1:any){
     this.searchValue=value1.target.value;
   this.element.searchArrayFilter(this.searchValue);
   console.log(this.searchValue)
     
  }
}

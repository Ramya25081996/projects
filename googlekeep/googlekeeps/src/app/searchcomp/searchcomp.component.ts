import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-searchcomp',
  templateUrl: './searchcomp.component.html',
  styleUrls: ['./searchcomp.component.css']
})
export class SearchcompComponent implements OnInit {
   val:any;
  constructor(public element:DataService) { }

  ngOnInit(): void {
  }
  

}

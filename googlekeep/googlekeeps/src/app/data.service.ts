import { Injectable, OnInit } from '@angular/core';
type Notes = {
  title: string
  textNote: string
  list: string
}
export class DataService {
  
  noteshighlight:boolean=false;
  keepNotesValue:{textNoteArray:Notes[], remainerArray:Notes[],archiveArray:Notes[],editLabelArray:{c:string,notes:Notes[]}[]}={
      textNoteArray:[],
      editLabelArray:[],
      remainerArray:[],
      archiveArray:[]
  }
  selectedvalue:Notes[] = [];
  
  edilabelstextArray:any=[];
  element!:any;
  editlabelsshow:boolean=false;
  deletedvalue:any=[];
  takethetextcontent:string="Keep";
  x:any;
  menuIconHighlight:boolean=false;
  searchElement:any;
  constructor() {
  }
  getkeepstextvalue(x:any,y:any,z:any){
    this.selectedvalue.push({title:x,textNote:y,list:z});
    console.log( this.selectedvalue);
  }
  deleteElement(index:any){
    this.x=this.selectedvalue.splice(index,1);
    this.deletedvalue.push(this.x[0]);
    console.log(this.x);
    console.log(this.deletedvalue);
    console.log(this.selectedvalue.splice(index,1))
};
getEditlabelvalue(e:any){
  this.keepNotesValue.editLabelArray.push({c:e,notes:[]})
  
}
deletedElementFromTrash(index1:any){
  this.deletedvalue.splice(index1,1);
}
searchArrayFilter(element:any){
   
    this.searchElement = this.selectedvalue.filter(
      val => val.title.includes(element)
    );
}
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditlabelsComponent } from './editlabels/editlabels.component';
import { EdittextcompComponent } from './edittextcomp/edittextcomp.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { KeepscompComponent } from './keepscomp/keepscomp.component';
import { NavcompComponent } from './navcomp/navcomp.component';
import { NotesComponent } from './notes/notes.component';
import { SearchcompComponent } from './searchcomp/searchcomp.component';
import { TextnotecompComponent } from './textnotecomp/textnotecomp.component';
import { TrashComponent } from './trash/trash.component';
import { TrashchildComponent } from './trashchild/trashchild.component';

const routes: Routes = [
  {path:"",component:KeepscompComponent,children:[
    {path: "", redirectTo: "keeps", pathMatch: 'full'},
    {path:"keeps",component:NotesComponent,children:[{path:"pages",component:TextnotecompComponent}]},
    {path:"labels/:id",component:NotesComponent,children:[{path:"pages",component:TextnotecompComponent}]},
    {path:"remainder",component:NotesComponent,children:[{path:"pages",component:TextnotecompComponent}]},
    {path:"archive",component:NotesComponent,children:[{path:"pages",component:TextnotecompComponent}]},
    {path:"search",component:SearchcompComponent},
    {path:"trash",component:TrashComponent,children:[{path:"delete",component:TrashchildComponent}]}
  ]},
  {path:"",component:NavcompComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

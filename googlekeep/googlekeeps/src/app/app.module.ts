import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeepscompComponent } from './keepscomp/keepscomp.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { NavcompComponent } from './navcomp/navcomp.component';
import { NotesComponent } from './notes/notes.component';
import { EditlabelsComponent } from './editlabels/editlabels.component';
import { TrashComponent } from './trash/trash.component';
import { TextnotecompComponent } from './textnotecomp/textnotecomp.component';
import { EdittextcompComponent } from './edittextcomp/edittextcomp.component';
import { TrashchildComponent } from './trashchild/trashchild.component';
import { SearchcompComponent } from './searchcomp/searchcomp.component';
import { CustomDirective } from './custom.directive';
import { TransferPipe } from './transfer.pipe';
import { DataService } from './data.service';
import { IfDirective } from './if.directive';

@NgModule({
  declarations: [
    AppComponent,
    KeepscompComponent,
    HeadercompComponent,
    NavcompComponent,
    NotesComponent,
    EditlabelsComponent,
    TrashComponent,
    TextnotecompComponent,
    EdittextcompComponent,
    TrashchildComponent,
    SearchcompComponent,
    CustomDirective,
    TransferPipe,
    IfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { PreviewComponent } from './components/preview/preview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Questionnaire';
  constructor(private _matdialog: MatDialog){}
  openDialog(){
    this._matdialog.open(DialogBoxComponent,{
      
    })
  }
  previewDialog(){
    this._matdialog.open(PreviewComponent,{
      
    })
  }
}

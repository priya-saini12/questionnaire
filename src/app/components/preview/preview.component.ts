import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/Shared/Services/questions.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit{
  questions:any=[];
  i:number=0;
constructor(private _service:QuestionsService){}
  ngOnInit(): void {
   this._service.get().subscribe((data)=>{
    this.questions=data;    
   });
  }
}

import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/Shared/Services/questions.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  questions: any[] = [];
  constructor(private _service: QuestionsService) { }
  ngOnInit(): void {
    this._service.getQuestions().subscribe((data) => {
      this.questions = data;
    })
  }
}

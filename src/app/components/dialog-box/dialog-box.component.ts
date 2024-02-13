import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QuestionsService } from 'src/app/Shared/Services/questions.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  currentIndex: number = 0;
  myVisibleQues: any = [];
  questions: any[] = [];
  selectedOptions: string[] = [];
  option: any;
  filterQuestion: any[] = [];
  isFirst: boolean = true;
  currentQuestion: any = [];

  constructor(private _service: QuestionsService, private dialogRef: MatDialogRef<DialogBoxComponent>) { }
  ngOnInit() {
    this._service.getQuestions().subscribe(data => {
      this.questions = data;
      this.myVisibleQues.push(this.questions[0]);
    })
  }

  selectedOption(option: string) {
    this.selectedOptions.push(option);
  }

  filterQuestions() {
    this.isFirst = false;
    for (let option of this.selectedOptions) {
      this.option = option
      for (let question of this.questions) {
        if (question.category === this.option) {
          this.filterQuestion.push(question);
        }
      }
    }
  }

  next() {
    if (this.filterQuestion.length > 0) {
      this.currentIndex++;
    }
    this.filterQuestions();
    let response = {
      selectedQuestion: this.questions[this.currentIndex].question,
      selectedAns: this.selectedOptions
    }
    this._service.selectedQuestions(response).subscribe();
    this.selectedOptions = [];

  }
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.filterQuestions();
    }
  }

  // closeDialog() {
  //   this.dialogRef.close();
  // }
}
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/Shared/Services/questions.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  currentIndex: number = 0;
  myVisibleQues: any[] = [];
  questions: any[] = [];
  selectedOptions: string[] = [];
  filterQuestion: any[] = [];
  btn: string = "Next";
  currentAnswers: any[] = [];
  allQuestions: any[] = [];

  constructor(private _service: QuestionsService) { }

  ngOnInit() {
    this._service.getQuestions().subscribe(data => {
      this.questions = data;
      this.myVisibleQues.push(this.questions[0]);
      this.allQuestions = this.myVisibleQues;
    })
  }
  selectedOption(option: string, checkboxQues: boolean, ele?: any) {
    if (checkboxQues === true) {
      if (!this.selectedOptions.includes(option)) {
        this.selectedOptions.push(option)
      }
      else {
        this.selectedOptions.splice(this.selectedOptions.indexOf(option), 1)
      }
    }
    else {
      this.currentAnswers = [option];
    }
  }
  filterQuestions() {
    for (let option of this.selectedOptions) {
      for (let question of this.questions) {
        if (question.category === option) {
          this.filterQuestion.push(question);
          this.allQuestions = [...this.myVisibleQues, ...this.filterQuestion];
        }
      }
    }
  }
  next() {
    this.selectedOptions = [...this.selectedOptions, ...this.currentAnswers];
    let response = {
      selectedQuestion: this.allQuestions[this.currentIndex].question,
      selectedAns: this.selectedOptions
    };
    if (this.allQuestions.length > 0) {
      this.currentIndex++;
    }
    if (this.allQuestions.length === this.currentIndex + 1) {
      this.btn = "Submit";
      this._service.selectedQuestions(response).subscribe();
    }

    this.filterQuestions();
    this.selectedOptions = [];
    this.currentAnswers = [];
  }
  prev() {
    if (this.allQuestions.length > 0) {
      this.currentIndex--;
      this.filterQuestions();
    }
  }
}
import { Component, OnInit } from '@angular/core';
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
  filterQuestion: any[] = [];
  first: boolean = true;
  btn: string = "Next";
  currentAnswers: any = [];

  constructor(private _service: QuestionsService) { }
  ngOnInit() {
    this._service.getQuestions().subscribe(data => {
      this.questions = data;
      this.myVisibleQues.push(this.questions[0]);
    })
  }


  selectedOption(option: string, checkboxQues: boolean, ele?: any) {
    // debugger
    if (checkboxQues === true) {
      // this.selectedOptions.push(option);
      if (!this.selectedOptions.includes(option)) {
        this.selectedOptions.push(option);
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
    this.first = false;
    for (let option of this.selectedOptions) {
      for (let question of this.questions) {
        if (question.category === option) {
          this.filterQuestion.push(question);
        }
      }
    }
  }
  next() {
    this.selectedOptions = [...this.selectedOptions, ...this.currentAnswers];

    if (this.first) {
      let response = {
        selectedQuestion: this.myVisibleQues[this.currentIndex].question,
        selectedAns: this.selectedOptions
      };
      this._service.selectedQuestions(response).subscribe();
    } else {
      let response = {
        selectedQuestion: this.filterQuestion[this.currentIndex].question,
        selectedAns: this.selectedOptions
      };
      this._service.selectedQuestions(response).subscribe();
    }
    if (this.filterQuestion.length > 0) {
      this.currentIndex++;
    }
    if (this.filterQuestion.length === this.currentIndex + 1) {
      this.btn = "Submit";
    }
    this.filterQuestions();
    this.selectedOptions = [];
    this.currentAnswers = [];
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.filterQuestions();
    }
  }
}
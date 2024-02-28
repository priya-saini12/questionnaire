import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/Shared/Services/questions.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DialogBoxComponent implements OnInit {
  currentIndex: number = 0;
  questions: any[] = [];
  selectedOptions: string[] = [];
  btn: string = "Next";
  allQuestions: any[] = [];
  response: any[] = [];
  obj: any = {};

  constructor(private _service: QuestionsService) { }

  ngOnInit() {

    this._service.getQuestions().subscribe(data => {
      this.questions = data;
      this.allQuestions.push(this.questions[0]);
    })
  }

  selectedOption(option: string, checkboxQues: boolean, ele?: any) {

    if (checkboxQues === true) {
      if (ele.checked) {
        this.selectedOptions.push(option)
      } else {
        this.selectedOptions.splice(this.selectedOptions.indexOf(option), 1)
      }
    }
    else {
      this.selectedOptions = [option];
    }
  }

  filterQuestions() {
    for (let option of this.selectedOptions) {
      for (let question of this.questions) {
        if (question.category === option) {
          this.allQuestions = [...this.allQuestions, question];
        }
      }
    }
  }

  next() {
    this.obj = {
      selectedQues: this.allQuestions[this.currentIndex].question,
      selectedAns: this.selectedOptions
    }
    this._service.selectedQuestions(this.obj).subscribe();
    this.filterQuestions();
    if (this.allQuestions.length > this.currentIndex) {
      this.currentIndex++;
    }
    // if (this.allQuestions.length === (this.currentIndex + 1)) {
    //   this.btn = "Submit";
    // }
    this.selectedOptions = [];
  }

  
  prev() {
    if (this.currentIndex >= 2) {
      this.allQuestions.splice(2);
    }
    else {
      this.allQuestions.pop();
    }
      if (this.currentIndex > 0) {
      this.currentIndex--;
      // this.response.splice(this.currentIndex, 1)
    }
    this.filterQuestions();
  }
}
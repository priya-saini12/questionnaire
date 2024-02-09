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
  option: any;
  filterQuestion: any[] = [];
  isFirst:boolean=true;
  // category: any;

  constructor(private _service: QuestionsService) { }
  ngOnInit(): void {
    this._service.getQuestions().subscribe(data => {
      this.questions = data;
      this.myVisibleQues.push(this.questions[0]);
      
    })
  }
 
  filterQuestions() {
    this.isFirst=false;
    for (let question of this.questions) {
      if (question.category === this.option) {
        this.filterQuestion.push(question);
        // console.log(this.filterQuestion);
      }
    }
  }
  selectedOption(option: string) {
    this.selectedOptions=[];
    this.selectedOptions.push(option);
    for (let option of this.selectedOptions) {
      this.option = option;
      // console.log(this.option);
      // this.filterQuestions();
    }
  }
  next() {
    // this.selectedOptions=[];
      // if (this.currentIndex + 1) {
        this.currentIndex++;
        this.filterQuestions();      
    // }
  }
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.filterQuestions();
    }
  }
  
}
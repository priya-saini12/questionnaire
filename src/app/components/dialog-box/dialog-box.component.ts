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
  // category: any;

  constructor(private _service: QuestionsService) { }
  ngOnInit(): void {
    this._service.getQuestions().subscribe(data => {
      this.questions = data;
      this.myVisibleQues.push(this.questions[0]);
      console.log(this.myVisibleQues);
      // this.filterQuestions();
      // this.questions.forEach(element=>{
      // this.category= element.category;              
      // })
    })
  }
  // selectedOption(category: string) {
  //   this.selectedOptions= category;
  //   console.log(this.selectedOptions);
  // }
  selectedOption(option: string) {
    this.selectedOptions.push(option);
    for (let option of this.selectedOptions) {
      this.option = option;
      console.log(this.option);
      this.filterQuestions();
    }
    //  console.log(this.selectedOptions);
    // this.filterQuestions();
  }
  next() {
    // if(this.questions[this.currentIndex].category === this.selectedOption){
    if (this.questions.length > this.currentIndex + 1) {
      this.currentIndex++;
      // this.filterQuestions();
    }
    // }
  }
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      // this.filterQuestions();
    }
  }
  filterQuestions() {
    let filterQuestion: any[] = [];
    // let test = this.questions.filter(q => {
    //    if( this.selectedOptions === q.category){
    //   }});
    // debugger
    for (let question of this.questions) {
      if (question.category === this.option) {
        filterQuestion.push(question);
        console.log(filterQuestion);
      }
    }
    // this.currentIndex = 0;
  }
}
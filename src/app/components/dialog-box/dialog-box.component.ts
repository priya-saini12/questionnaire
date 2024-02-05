import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/Shared/Services/questions.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  currentIndex: number = 0;
  questions: any[] = [];
  selectedOptions: string | undefined;
  // category: any;
  constructor(private _service: QuestionsService) { }
  ngOnInit(): void {
    this._service.getQuestions().subscribe(data => {
      this.questions = data;
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
    this.selectedOptions = option;
    // console.log(this.selectedOptions);
  }
  next() {
    // if(this.questions[this.currentIndex].category === this.selectedOption){
    if (this.questions.length > this.currentIndex + 1) {
      this.currentIndex++;
      this.filterQuestions();
    }
    // }
  }
  prev() {
    if (this.currentIndex > 1) {
      this.currentIndex--;
      this.filterQuestions();
    }
  }
  filterQuestions() {
    let filterQuestion: any[] = [];
    // let test = this.questions.filter(q => {
    //    if( this.selectedOptions === q.category){
    //   }});
    for (let question of this.questions) {
      if (question.category === this.selectedOptions) {
        filterQuestion.push(question);
        console.log(filterQuestion);
      }
    }
  }
}
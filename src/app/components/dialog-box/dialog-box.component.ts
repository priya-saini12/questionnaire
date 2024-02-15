import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
 first: boolean = true;
  btn: string = "Next";
  currentAnswers: any = [];

  constructor(private _service: QuestionsService, private _dialogRef:MatDialogRef<DialogBoxComponent>) { }
  ngOnInit() {
    this._service.getQuestions().subscribe(data => {
      this.questions = data;
      this.myVisibleQues.push(this.questions[0]);
    })
  }


  selectedOption(option: string, checkboxQues: boolean, ele?: any) {
    // debugger
    if(checkboxQues === true){
      this.selectedOptions.push(option);
      // console.log(this.selectedOptions);
    }
else{
  this.currentAnswers = [option];
  // console.log(this.currentAnswers);
  
}
    
  }
  
  filterQuestions() {
    this.first = false;
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
    // this.selectedOptions = [...this.selectedOptions, ...this.currentAnswers];
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
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.filterQuestions();
    }
  }

  // closeDialog() {
  //  
  // }
}
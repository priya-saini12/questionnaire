import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit{
@Input() label:string="";
@Input() type:string="";
@Input() control:string="";
@Input() formGroup!:FormGroup;
constructor(){}
ngOnInit(): void {
  this.formGroup.addControl(this.control, new FormControl('', Validators.required));
}
}

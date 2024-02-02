import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  @Input() type: string = "";
  @Input() value: number = 0;
  // @Input() control: string = '';
}
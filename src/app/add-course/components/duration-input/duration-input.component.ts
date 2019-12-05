import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent {
  @Input() duration: string;
  @Output() durationValue = new EventEmitter();
  constructor() { }

  durationEmitter(value) {
    this.durationValue.emit(value);
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent {
  @Input() date;
  @Output() dateValueEmitter = new EventEmitter();
  constructor() { }

  dateEmitter(value) {
    this.dateValueEmitter.emit(value);
  }
}

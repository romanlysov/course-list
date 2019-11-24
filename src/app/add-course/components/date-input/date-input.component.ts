import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {
  @Input() date;
  @Output() dateValueEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  dateEmitter(value) {
    this.dateValueEmitter.emit(value);
  }
}

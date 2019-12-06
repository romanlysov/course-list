import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {
  @Input() duration: string;
  @Output() durationValue = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  durationEmitter(value) {
    this.durationValue.emit(value);
  }

}

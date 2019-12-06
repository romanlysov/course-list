import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-top-rated-input',
  templateUrl: './top-rated-input.component.html',
  styleUrls: ['./top-rated-input.component.scss']
})
export class TopRatedInputComponent {
  @Input()isTopRated: boolean;
  @Output() isTopRatedValue = new EventEmitter();
  constructor() { }

  topRatedEmitter(event) {
    this.isTopRatedValue.emit(event.target.checked);
  }
}

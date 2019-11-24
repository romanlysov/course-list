import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-rated-input',
  templateUrl: './top-rated-input.component.html',
  styleUrls: ['./top-rated-input.component.scss']
})
export class TopRatedInputComponent implements OnInit {
  @Input()isTopRated: boolean;
  @Output() isTopRatedValue = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  topRatedEmitter(event) {
    this.isTopRatedValue.emit(event.target.checked);
  }
}

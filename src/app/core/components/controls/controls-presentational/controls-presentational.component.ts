import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls-presentational',
  templateUrl: './controls-presentational.component.html',
  styleUrls: ['./controls-presentational.component.scss']
})
export class ControlsPresentationalComponent {
  @Output() searchValue = new EventEmitter();

  public value: string;

  constructor() { }

  search(value) {
    this.searchValue.emit(value);
  }
}

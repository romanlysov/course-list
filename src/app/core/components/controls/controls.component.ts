import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  @Output() searchQuery = new EventEmitter();

  constructor() { }

  searchHandler(value) {
    this.searchQuery.emit(value);
  }
}

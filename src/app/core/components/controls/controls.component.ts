import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  constructor() { }
  @Output() searchQuery = new EventEmitter();
  searchHandler(value) {
    this.searchQuery.emit(value);
  }
  ngOnInit() {
  }
}

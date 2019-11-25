import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-controls-presentational',
  templateUrl: './controls-presentational.component.html',
  styleUrls: ['./controls-presentational.component.scss']
})
export class ControlsPresentationalComponent implements OnInit {
  @Output() searchValue = new EventEmitter();
  public value: string;
  constructor() { }

  ngOnInit() {
  }
  search(value) {
    this.searchValue.emit(value);
  }
}

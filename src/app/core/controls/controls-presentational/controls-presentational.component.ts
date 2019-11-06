import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-controls-presentational',
  templateUrl: './controls-presentational.component.html',
  styleUrls: ['./controls-presentational.component.scss']
})
export class ControlsPresentationalComponent implements OnInit {
  @Input() onSearch;
  constructor() { }

  ngOnInit() {
  }

}

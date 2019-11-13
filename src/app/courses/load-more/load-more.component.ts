import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
  @Output() loadMore = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  load(event) {
    event.preventDefault();
    this.loadMore.emit(event);
  }
}

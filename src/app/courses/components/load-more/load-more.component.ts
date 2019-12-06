import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent {
  @Output() loadMore = new EventEmitter();

  constructor() {
  }

  load(event) {
    event.preventDefault();
    this.loadMore.emit(event);
  }
}

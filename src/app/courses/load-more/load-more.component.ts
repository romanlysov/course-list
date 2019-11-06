import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
  @Input() onLoad;
  constructor() { }

  ngOnInit() {
  }
}

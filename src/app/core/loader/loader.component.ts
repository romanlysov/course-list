import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs/index';
import { select, Store } from '@ngrx/store';
import { getLoaderStatus } from './loader.selectors';
import { AppStore } from '../../shared/models/store.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppStore>) {
  }

  ngOnInit() {
    this.isLoading$ = this.store.pipe(select(getLoaderStatus));
  }

}

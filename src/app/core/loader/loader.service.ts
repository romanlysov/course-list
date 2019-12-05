import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() {
  }

  loaderSubject = new Subject();

  public setLoading(status: boolean) {
    this.loaderSubject.next({show: status});
  }
}

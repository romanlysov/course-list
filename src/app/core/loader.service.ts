import { Injectable } from '@angular/core';
import {of, Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  private isShown: boolean;
  loaderSubject = new Subject();
  loaderState = this.loaderSubject.asObservable();


  public isLoading() {
    return of(this.isShown);
  }

  public setLoading(status: boolean) {
    this.loaderSubject.next({show: status});
  }
}

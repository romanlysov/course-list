import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';

import { Login } from '../../actions/authorization.actions';
import { isLoggedOut } from '../../selectors/auth.selectors';
import { SetLoaderStatus } from '../../../core/loader/loader.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss']
})
export class LoginComponent {
  public isLoginFailed$: Observable<boolean>;
  public loginControl = new FormControl('');
  public passwordControl = new FormControl('');

  constructor(private store: Store<{ auth: { isLoggedIn: boolean } }>) {
  }

  loginHandler() {
    this.store.dispatch(new SetLoaderStatus(true));
    this.store.dispatch(new Login({login: this.loginControl.value, pass: this.passwordControl.value}));
    this.isLoginFailed$ = this.store.pipe(select(isLoggedOut));
  }
}

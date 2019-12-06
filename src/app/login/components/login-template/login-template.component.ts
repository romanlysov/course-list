import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Login } from '../../actions/authorization.actions';
import { isLoggedOut } from '../../selectors/auth.selectors';
import { Observable } from 'rxjs/index';
import { SetLoaderStatus } from '../../../core/loader/loader.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss']
})
export class LoginComponent {
  public login: string;
  public password: string;
  public isLoginFailed$: Observable<boolean>;

  constructor(private store: Store<{ auth: { isLoggedIn: boolean } }>) {
  }

  loginHandler(login, pass) {
    this.store.dispatch(new SetLoaderStatus(true));
    this.store.dispatch(new Login({login, pass}));
    this.isLoginFailed$ = this.store.pipe(select(isLoggedOut));
  }
}

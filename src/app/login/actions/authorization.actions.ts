import { Action } from '@ngrx/store';

export const AuthActionTypes = {
  Login: '[Auth] Login',
  LoginSuccess: '[Auth] Login Success',
  LoginFailure: '[Auth] Login Failure',
};

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload) {
  }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload) {
  }
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload) {
  }
}

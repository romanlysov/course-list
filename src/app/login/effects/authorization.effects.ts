import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs/index';

import { AuthActionTypes, Login, LoginFailure, LoginSuccess } from '../actions/authorization.actions';
import { AuthorizationService } from '../../core/services/authorization/authorization.service';
import { AuthResponse, UserInfo } from '../../shared/models/authorization.model';
import { catchError, switchMap, tap } from 'rxjs/internal/operators';
import { SetLoaderStatus } from '../../core/loader/loader.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    map((action: Login) => action.payload),
    exhaustMap((userInfo: UserInfo) =>
      this.authService.logIn(userInfo).pipe(
        switchMap((res: AuthResponse) => {
          this.authService.setUserToken(res.idToken);
          return [new LoginSuccess(userInfo), new SetLoaderStatus(false)];
        }),
        catchError(error => of(new LoginFailure(error), new SetLoaderStatus(false)))
      ))
  );

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/courses']))
  );

  constructor(private actions$: Actions, private authService: AuthorizationService, private router: Router) {
  }
}

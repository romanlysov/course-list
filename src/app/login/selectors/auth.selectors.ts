import { createSelector } from '@ngrx/store';
import { AppStore } from '../../shared/models/store.model';
import { AuthState } from '../../shared/models/authorization.model';

const getAuth = (state: AppStore) => state.auth;

export const isLoggedOut = createSelector(
  getAuth,
  (auth: AuthState) => !auth.isLoggedIn
);

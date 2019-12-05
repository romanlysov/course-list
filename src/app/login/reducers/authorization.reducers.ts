import { AuthActionTypes } from '../actions/authorization.actions';
import { AuthState } from '../../shared/models/authorization.model';

const initialState: AuthState = { isLoggedIn: false };

export const authReducer = (state: AuthState = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.payload,
      };
    }
    case AuthActionTypes.LoginFailure: {
     return {
       ...state,
       isLoggedIn: false,
     };
    }
    default:
      return state;
  }
};

import { createReducer, on } from "@ngrx/store";

import { AuthState } from "../interfaces/auth";
import * as AuthActions from '../actions/auth.actions';

const defaultAuthState: AuthState = {
  email: '',
  isLoggedIn: false
};

export const authReducer = createReducer(
  defaultAuthState,
  on(AuthActions.loginSuccessful, (state, { email }) => ({
    ...state,
    email,
    isLoggedIn: true,
  })),
  on(AuthActions.logoutSuccessful, state => ({
    ...state,
    email: '',
    isLoggedIn: false,
  })),
  on(AuthActions.registerSuccessful, (state, { email }) => ({
    ...state,
    email,
    isLoggedIn: true,
  })),
);

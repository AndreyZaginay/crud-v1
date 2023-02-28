import { createAction, props } from '@ngrx/store';

import { Login } from '../../entities/login';
import { Register } from '../../entities/register';

export const login = createAction('[Auth] Login', props<{ credentials: Login }>());
export const loginSuccessful = createAction('[Auth] Login Successful', props<{ email: string }>());

export const logout = createAction('[Auth] Logout');
export const logoutSuccessful = createAction('[Auth] Logout Successful');

export const register = createAction('[Auth] Register', props<{ credentials: Register }>());
export const registerSuccessful = createAction('[Auth] Register Successful', props<{ email: string }>());

import { createAction, props } from '@ngrx/store';
import { AuthenticationSuccessPayload, ErrorResponse } from './api.types';

export const logIn = createAction(
  '[API] Log In',
  props<{ email: string; password: string }>()
);

export const autoLogin = createAction('[API] Auto Login');

export const autoLoginFailed = createAction('[API] Auto Login Failed');

export const logOut = createAction('[API] Log Out');

export const authenticationSuccess = createAction(
  '[API] Authentication Success',
  props<AuthenticationSuccessPayload>()
);

export const authenticationFailed = createAction(
  '[API] Authentication Failed',
  props<{ error: ErrorResponse }>()
);

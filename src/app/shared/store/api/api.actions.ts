import { createAction, props } from '@ngrx/store';
import { ErrorResponse, LoginResponse } from './api.types';

export const logIn = createAction(
  '[API] Log In',
  props<{ email: string; password: string }>()
);

export const logOut = createAction('[API] Log Out');

export const authenticationSuccess = createAction(
  '[API] Authentication Success',
  props<{ data: LoginResponse }>()
);

export const authenticationFailed = createAction(
  '[API] Authentication Failed',
  props<{ error: ErrorResponse }>()
);

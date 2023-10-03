import { createAction, props } from '@ngrx/store';
import {
  AuthData,
  AuthenticationSuccessPayload,
  ErrorResponse,
  LoginPayload,
  RefreshTokenPayload,
  RegisterPayload,
} from './api-auth.types';

export const register = createAction(
  '[API Auth] Register',
  props<RegisterPayload>()
);

export const logIn = createAction('[API Auth] Log In', props<LoginPayload>());

export const guestLogIn = createAction('[API Auth] Guest Log In');

export const autoLogin = createAction('[API Auth] Auto Login');
export const autoLoginFailed = createAction('[API Auth] Auto Login Failed');

export const refreshToken = createAction(
  '[API Auth] Refresh Token',
  props<RefreshTokenPayload>()
);
export const refreshTokenSuccess = createAction(
  '[API Auth] Refresh Token Success',
  props<{ authData: AuthData }>()
);

export const logOut = createAction('[API Auth] Log Out');

export const authenticationSuccess = createAction(
  '[API Auth] Authentication Success',
  props<AuthenticationSuccessPayload>()
);

export const errorResponse = createAction(
  '[API Auth] Error Response',
  props<{ error: ErrorResponse }>()
);

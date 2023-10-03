import { createAction, props } from '@ngrx/store';
import {
  Asset,
  AuthData,
  AuthenticationSuccessPayload,
  ErrorResponse,
  LoginPayload,
  RefreshTokenPayload,
  RegisterPayload,
} from './api.types';

export const register = createAction(
  '[API] Register',
  props<RegisterPayload>()
);

export const logIn = createAction('[API] Log In', props<LoginPayload>());

export const guestLogIn = createAction('[API] Guest Log In');

export const autoLogin = createAction('[API] Auto Login');
export const autoLoginFailed = createAction('[API] Auto Login Failed');

export const refreshToken = createAction(
  '[API] Refresh Token',
  props<RefreshTokenPayload>()
);
export const refreshTokenSuccess = createAction(
  '[API] Refresh Token Success',
  props<{ authData: AuthData }>()
);

export const logOut = createAction('[API] Log Out');

export const authenticationSuccess = createAction(
  '[API] Authentication Success',
  props<AuthenticationSuccessPayload>()
);

export const apiResponseFailed = createAction(
  '[API] API Response Failed',
  props<{ error: ErrorResponse }>()
);

export const addAsset = createAction(
  '[Core] Add Asset',
  props<{ asset: Asset }>()
);
export const removeAsset = createAction(
  '[Core] Remove Asset',
  props<{ index: number }>()
);

export const setCurrentAssetId = createAction(
  '[Core] Set Current Asset ID',
  props<{ id: number }>()
);

export const setCurrentAssetGroup = createAction(
  '[Core] Set Current Asset Group',
  props<{ group: string }>()
);

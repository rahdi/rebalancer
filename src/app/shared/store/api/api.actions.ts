import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[API] Login',
  props<{ email: string; password: string }>()
);

export const authenticationSuccess = createAction(
  '[API] Authentication Success',
  props<{ data: any }>()
);

export const authenticationFailed = createAction(
  '[API] Authentication Failed',
  props<{ error: string }>()
);

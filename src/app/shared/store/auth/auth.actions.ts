import { createAction, props } from '@ngrx/store';

export const setIsLoading = createAction(
  '[Auth] Set isLoading',
  props<{ payload: boolean }>()
);

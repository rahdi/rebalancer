import { createAction, props } from '@ngrx/store';
import { SnackbarContent } from './snackbar.types';

export const addSnackbar = createAction(
  '[Snackbar] Add Snackbar',
  props<{ payload: SnackbarContent }>()
);

export const removeSnackbar = createAction(
  '[Snackbar] Remove Snackbar',
  props<{ index: number }>()
);

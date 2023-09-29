import { createReducer, on } from '@ngrx/store';
import { SnackbarContent } from './snackbar.types';
import { addSnackbar, removeSnackbar } from './snackbar.actions';

export interface State {
  snackbars: SnackbarContent[];
}

const initialState: State = {
  snackbars: [],
};

export const snackbarReducer = createReducer(
  initialState,
  on(addSnackbar, (state, action) => ({
    ...state,
    snackbars: [...state.snackbars, action.payload].slice(-4),
  })),
  on(removeSnackbar, (state, action) => ({
    ...state,
    snackbars: [...state.snackbars].filter((_, i) => i !== action.index),
  }))
);

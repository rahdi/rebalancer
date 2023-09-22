import { createReducer, on } from '@ngrx/store';
import {
  authenticationFailed,
  authenticationSuccess,
  login,
} from './api.actions';

export interface State {
  isLoading: boolean;
  user: string | null;
}

const initialState: State = {
  isLoading: false,
  user: null,
};

export const apiReducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(authenticationSuccess, (state) => ({ ...state, isLoading: false })),
  on(authenticationFailed, (state) => ({ ...state, isLoading: false }))
);

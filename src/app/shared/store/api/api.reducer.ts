import { createReducer, on } from '@ngrx/store';
import {
  authenticationFailed,
  authenticationSuccess,
  logIn,
  logOut,
} from './api.actions';
import { UserData } from './api.types';

export interface State {
  isLoading: boolean;
  user: UserData | null;
}

const initialState: State = {
  isLoading: false,
  user: null,
};

export const apiReducer = createReducer(
  initialState,
  on(logIn, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(logOut, (state) => ({ ...state, isLoading: false, user: null })),
  on(authenticationSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    user: action.userData,
  })),
  on(authenticationFailed, (state) => ({ ...state, isLoading: false }))
);

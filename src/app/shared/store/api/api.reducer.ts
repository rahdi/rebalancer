import { createReducer, on } from '@ngrx/store';
import {
  apiResponseFailed,
  authenticationSuccess,
  logIn,
  logOut,
  refreshToken,
  refreshTokenSuccess,
} from './api.actions';
import { AuthData } from './api.types';

export interface State {
  isLoading: boolean;
  authData: AuthData | null;
  email: string;
}

const initialState: State = {
  isLoading: false,
  authData: null,
  email: '',
};

export const apiReducer = createReducer(
  initialState,
  on(logIn, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(logOut, (state) => ({
    ...state,
    isLoading: false,
    authData: null,
    email: '',
  })),
  on(authenticationSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    authData: action.authData,
    email: action.email,
  })),
  on(apiResponseFailed, (state) => ({ ...state, isLoading: false })),
  on(refreshToken, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(refreshTokenSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    authData: action.authData,
  }))
);

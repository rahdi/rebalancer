import { createReducer, on } from '@ngrx/store';
import {
  errorResponse,
  authenticationSuccess,
  guestLogIn,
  logIn,
  logOut,
  refreshToken,
  refreshTokenSuccess,
  register,
} from './api-auth.actions';
import { AuthData } from './api-auth.types';

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

export const reducer = createReducer(
  initialState,
  on(register, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(logIn, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(guestLogIn, (state) => ({
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
  on(errorResponse, (state) => ({ ...state, isLoading: false })),
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

import { createReducer, on } from '@ngrx/store';
import {
  addAsset,
  apiResponseFailed,
  authenticationSuccess,
  guestLogIn,
  logIn,
  logOut,
  refreshToken,
  refreshTokenSuccess,
  register,
  removeAsset,
  setCurrentAssetGroup,
  setCurrentAssetId,
} from './api.actions';
import { Asset, AuthData } from './api.types';

export interface State {
  isLoading: boolean;
  authData: AuthData | null;
  email: string;
  assets: Asset[];
  currentAssetId: number | null;
  currentAssetGroup: string;
}

const initialState: State = {
  isLoading: false,
  authData: null,
  email: '',
  assets: [],
  currentAssetId: null,
  currentAssetGroup: '',
};

export const apiReducer = createReducer(
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
  on(apiResponseFailed, (state) => ({ ...state, isLoading: false })),
  on(refreshToken, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(refreshTokenSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    authData: action.authData,
  })),
  on(addAsset, (state, action) => ({
    ...state,
    assets: [...state.assets, action.asset],
  })),
  on(removeAsset, (state, action) => ({
    ...state,
    assets: [...state.assets].filter((_, i) => i !== action.index),
  })),
  on(setCurrentAssetId, (state, action) => ({
    ...state,
    currentAssetId: action.id,
  })),
  on(setCurrentAssetGroup, (state, action) => ({
    ...state,
    currentAssetGroup: action.group,
  }))
);

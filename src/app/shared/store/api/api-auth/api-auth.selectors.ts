import { AppState } from 'app.store';

export const selectIsLoading = (state: AppState) => state.apiAuth.isLoading;

export const selectAuthData = (state: AppState) => state.apiAuth.authData;

export const selectEmail = (state: AppState) => state.apiAuth.email;

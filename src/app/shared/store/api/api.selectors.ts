import { AppState } from 'app.store';

export const selectIsLoading = (state: AppState) => state.api.isLoading;

export const selectAuthData = (state: AppState) => state.api.authData;

export const selectEmail = (state: AppState) => state.api.email;

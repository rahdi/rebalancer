import { AppState } from 'app.store';

export const selectIsLoading = (state: AppState) => state.auth.isLoading;

import { AppState } from 'app.store';

export const selectSnackbars = (state: AppState) => state.snackbar.snackbars;

import { AppState } from 'app.store';

export const selectIsMenuOpen = (state: AppState) => state.core.isMenuOpen;

export const selectIsTokenDialogOpen = (state: AppState) =>
  state.core.isTokenDialogOpen;

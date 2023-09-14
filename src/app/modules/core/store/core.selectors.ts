import { AppState } from 'app.reducer';

export const selectIsMenuOpen = (state: AppState) => state.core.isMenuOpen;

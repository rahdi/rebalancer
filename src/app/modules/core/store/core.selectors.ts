import { AppState } from 'app.store';

export const selectIsMenuOpen = (state: AppState) => state.core.isMenuOpen;

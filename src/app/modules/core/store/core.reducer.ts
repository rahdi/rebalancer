import { createReducer, on } from '@ngrx/store';

import {
  closeMenu,
  closeTokenDialog,
  openMenu,
  openTokenDialog,
} from './core.actions';

export interface State {
  isMenuOpen: boolean;
  isTokenDialogOpen: boolean;
}

const initialState: State = {
  isMenuOpen: false,
  isTokenDialogOpen: false,
};

export const coreReducer = createReducer(
  initialState,
  on(openMenu, (state) => ({ ...state, isMenuOpen: true })),
  on(closeMenu, (state) => ({ ...state, isMenuOpen: false })),
  on(openTokenDialog, (state) => ({ ...state, isTokenDialogOpen: true })),
  on(closeTokenDialog, (state) => ({ ...state, isTokenDialogOpen: false }))
);

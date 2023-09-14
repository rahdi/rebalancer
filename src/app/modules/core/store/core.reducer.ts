import { createReducer, on } from '@ngrx/store';

import { closeMenu, openMenu } from './core.actions';

export interface State {
  isMenuOpen: boolean;
}

const initialState: State = {
  isMenuOpen: false,
};

export const coreReducer = createReducer(
  initialState,
  on(openMenu, (state) => ({ ...state, isMenuOpen: true })),
  on(closeMenu, (state) => ({ ...state, isMenuOpen: false }))
);

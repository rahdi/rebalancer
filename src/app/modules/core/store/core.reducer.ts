import { createReducer, on } from '@ngrx/store';

import {
  addAsset,
  closeMenu,
  closeTokenDialog,
  openMenu,
  openTokenDialog,
  removeAsset,
  setCurrentAssetGroup,
  setCurrentAssetId,
} from './core.actions';
import { Asset } from './core.types';

export interface State {
  isMenuOpen: boolean;
  isTokenDialogOpen: boolean;
  assets: Asset[];
  currentAssetId: number | null;
  currentAssetGroup: string;
}

const initialState: State = {
  isMenuOpen: false,
  isTokenDialogOpen: false,
  assets: [],
  currentAssetId: null,
  currentAssetGroup: '',
};

export const coreReducer = createReducer(
  initialState,
  on(openMenu, (state) => ({ ...state, isMenuOpen: true })),
  on(closeMenu, (state) => ({ ...state, isMenuOpen: false })),
  on(openTokenDialog, (state) => ({ ...state, isTokenDialogOpen: true })),
  on(closeTokenDialog, (state) => ({ ...state, isTokenDialogOpen: false })),
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

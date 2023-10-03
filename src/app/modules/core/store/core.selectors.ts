import { createSelector } from '@ngrx/store';
import { AppState } from 'app.store';

export const selectIsMenuOpen = (state: AppState) => state.core.isMenuOpen;

export const selectIsTokenDialogOpen = (state: AppState) =>
  state.core.isTokenDialogOpen;

export const selectAssets = (state: AppState) => state.core.assets;
export const selectCurrentAssetId = (state: AppState) =>
  state.core.currentAssetId;
export const selectCurrentAssetGroup = (state: AppState) =>
  state.core.currentAssetGroup;

export const selectTotalAmount = createSelector(selectAssets, (assets) =>
  [...assets]
    .map((asset) => asset.amount)
    .reduce((total, current) => total + current)
);

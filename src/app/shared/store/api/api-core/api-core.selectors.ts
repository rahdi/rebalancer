import { createSelector } from '@ngrx/store';
import { AppState } from 'app.store';

export const selectAssets = (state: AppState) => state.apiCore.assets;
export const selectCurrentAssetId = (state: AppState) =>
  state.apiCore.currentAssetId;
export const selectCurrentAssetGroup = (state: AppState) =>
  state.apiCore.currentAssetGroup;

export const selectTotalAmount = createSelector(selectAssets, (assets) =>
  [...assets]
    .map((asset) => asset.amount)
    .reduce((total, current) => total + current)
);

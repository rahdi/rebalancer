import { createSelector } from '@ngrx/store';
import { AppState } from 'app.store';

export const selectIsLoading = (state: AppState) => state.api.isLoading;

export const selectAuthData = (state: AppState) => state.api.authData;

export const selectEmail = (state: AppState) => state.api.email;

export const selectAssets = (state: AppState) => state.api.assets;
export const selectCurrentAssetId = (state: AppState) =>
  state.api.currentAssetId;
export const selectCurrentAssetGroup = (state: AppState) =>
  state.api.currentAssetGroup;

export const selectTotalAmount = createSelector(selectAssets, (assets) =>
  [...assets]
    .map((asset) => asset.amount)
    .reduce((total, current) => total + current)
);

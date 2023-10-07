import { createSelector } from '@ngrx/store';
import { AppState } from 'app.store';

export const selectAssets = (state: AppState) => state.apiCore.assets;
export const selectCurrentAssetId = (state: AppState) =>
  state.apiCore.currentAssetId;
export const selectCurrentAssetGroup = (state: AppState) =>
  state.apiCore.currentAssetGroup;

export const selectTotalAmount = createSelector(selectAssets, (assets) =>
  assets
    .map((asset) => asset.amount)
    .reduce((total, current) => total + current)
);

export const selectChartData = createSelector(
  selectAssets,
  selectTotalAmount,
  (assets, totalAmount) => {
    const groups = [...new Set(assets.map((asset) => asset.group))];
    const chartData = groups.map((group) => ({
      name: group,
      value: assets
        .filter((asset) => asset.group === group)
        .map((asset) => asset.amount)
        .reduce((total, current) => total + current),
    }));

    return chartData.map((item) => ({
      ...item,
      extra: ((100 * item.value) / totalAmount).toFixed(2),
    }));
  }
);

export const selectOneGroupOfAssets = createSelector(
  selectAssets,
  selectCurrentAssetGroup,
  (assets, group) => assets.filter((asset) => asset.group === group)
);

export const selectIsLoading = (state: AppState) => state.apiCore.isLoading;

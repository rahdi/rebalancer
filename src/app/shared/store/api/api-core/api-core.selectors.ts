import { createSelector } from '@ngrx/store';
import { AppState } from 'app.store';

export const selectAssets = (state: AppState) => state.apiCore.assets;
export const selectCurrentAssetId = (state: AppState) =>
  state.apiCore.currentAssetId;
export const selectCurrentAssetGroup = (state: AppState) =>
  state.apiCore.currentAssetGroup;

export const selectTotalAmount = createSelector(selectAssets, (assets) => {
  const assetsArray = Object.values(assets || {});

  if (assetsArray.length > 0) {
    return assetsArray
      .filter(Boolean)
      .map((asset) => asset.amount)
      .reduce((total, current) => total + current);
  }

  return 0;
});

export const selectChartData = createSelector(
  selectAssets,
  selectTotalAmount,
  (assets, totalAmount) => {
    const assetsArray = Object.values(assets || {});
    const groups = [...new Set(assetsArray.map((asset) => asset.group))];

    const chartData = groups.map((group) => ({
      name: group,
      value: assetsArray
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
  (assets, group) =>
    Object.values(assets || {}).filter((asset) => asset.group === group)
);

export const selectTotalAmountOfOneGroup = createSelector(
  selectTotalAmount,
  selectOneGroupOfAssets,
  (allAssetsTotal, oneGroupOfAssets) => {
    let oneGroupTotal = 0;
    if (oneGroupOfAssets.length > 0) {
      oneGroupTotal = oneGroupOfAssets
        .filter(Boolean)
        .map((asset) => asset.amount)
        .reduce((sum, current) => sum + current);
    }

    const percentage = (100 * (oneGroupTotal / allAssetsTotal)).toFixed(2);

    return {
      amount: oneGroupTotal,
      percentage,
    };
  }
);

export const selectIsLoading = (state: AppState) => state.apiCore.isLoading;

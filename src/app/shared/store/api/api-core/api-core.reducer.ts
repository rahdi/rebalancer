import { createReducer, on } from '@ngrx/store';
import {
  addAsset,
  addAssetSuccess,
  deleteAsset,
  errorResponse,
  fetchAssets,
  fetchAssetsSuccess,
  setCurrentAssetGroup,
  setCurrentAssetId,
} from './api-core.actions';
import { FetchAssetsResponse } from './api-core.types';

export interface State {
  assets: FetchAssetsResponse;
  currentAssetId: string | null;
  currentAssetGroup: string;
  isLoading: boolean;
}

const initialState: State = {
  assets: {},
  currentAssetId: null,
  currentAssetGroup: '',
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(addAsset, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(addAssetSuccess, (state, { payload }) => ({
    ...state,
    isLoading: false,
    assets: { ...state.assets, ...payload },
  })),
  on(deleteAsset, (state) => ({ ...state, isLoading: true })),
  on(fetchAssets, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(fetchAssetsSuccess, (state, { assets }) => ({
    ...state,
    isLoading: false,
    assets: assets || {},
  })),
  on(setCurrentAssetId, (state, action) => ({
    ...state,
    currentAssetId: action.assetId,
  })),
  on(setCurrentAssetGroup, (state, action) => ({
    ...state,
    currentAssetGroup: action.group,
  })),
  on(errorResponse, (state) => ({
    ...state,
    isLoading: false,
  }))
);

import { createReducer, on } from '@ngrx/store';
import {
  addAsset,
  addAssetSuccess,
  errorResponse,
  fetchAssets,
  fetchAssetsSuccess,
  // removeAsset,
  setCurrentAssetGroup,
  setCurrentAssetId,
} from './api-core.actions';
import { FetchAssetsResponse } from './api-core.types';

export interface State {
  assets: FetchAssetsResponse;
  currentAssetId: number | null;
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
  // on(removeAsset, (state, action) => ({
  //   ...state,
  //   assets: [...state.assets].filter((_, i) => i !== action.index),
  // })),
  on(fetchAssets, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(fetchAssetsSuccess, (state, { assets }) => ({
    ...state,
    isLoading: false,
    assets,
  })),
  on(setCurrentAssetId, (state, action) => ({
    ...state,
    currentAssetId: action.id,
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

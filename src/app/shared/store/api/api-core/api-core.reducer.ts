import { createReducer, on } from '@ngrx/store';
import {
  addAsset,
  removeAsset,
  setCurrentAssetGroup,
  setCurrentAssetId,
} from './api-core.actions';
import { Asset } from './api-core.types';

export interface State {
  assets: Asset[];
  currentAssetId: number | null;
  currentAssetGroup: string;
}

const initialState: State = {
  assets: [],
  currentAssetId: null,
  currentAssetGroup: '',
};

export const reducer = createReducer(
  initialState,
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

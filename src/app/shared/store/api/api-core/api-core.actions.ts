import { createAction, props } from '@ngrx/store';
import {
  AddAssetSuccessPayload,
  Asset,
  FetchAssetsSuccessPayload,
} from './api-core.types';

export const fetchAssets = createAction('[API Core] Fetch Assets');
export const fetchAssetsSuccess = createAction(
  '[API Core] Fetch Assets Success',
  props<{ assets: FetchAssetsSuccessPayload }>()
);

export const addAsset = createAction(
  '[API Core] Add Asset',
  props<{ asset: Asset }>()
);
export const addAssetSuccess = createAction(
  '[API Core] Add Asset Success',
  props<{ payload: AddAssetSuccessPayload }>()
);

export const deleteAsset = createAction(
  '[API Core] Delete Asset',
  props<{ assetId: string }>()
);

export const setCurrentAssetId = createAction(
  '[API Core] Set Current Asset ID',
  props<{ assetId: string }>()
);

export const setCurrentAssetGroup = createAction(
  '[API Core] Set Current Asset Group',
  props<{ group: string }>()
);

export const errorResponse = createAction(
  '[API Core] Error Response',
  props<{ error: any }>()
);

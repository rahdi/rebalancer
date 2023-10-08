import { createAction, props } from '@ngrx/store';
import { Asset, FetchAssetsResponse } from './api-core.types';

export const fetchAssets = createAction('[API Core] Fetch Assets');
export const fetchAssetsSuccess = createAction(
  '[API Core] Fetch Assets Success',
  props<{ assets: FetchAssetsResponse }>()
);

export const addAsset = createAction(
  '[API Core] Add Asset',
  props<{ asset: Asset }>()
);
export const AddAssetSuccess = createAction(
  '[API Core] Add Asset Success',
  props<{ assetId: string }>()
);

export const removeAsset = createAction(
  '[API Core] Remove Asset',
  props<{ index: number }>()
);

export const setCurrentAssetId = createAction(
  '[API Core] Set Current Asset ID',
  props<{ id: number }>()
);

export const setCurrentAssetGroup = createAction(
  '[API Core] Set Current Asset Group',
  props<{ group: string }>()
);

export const errorResponse = createAction(
  '[API Core] Error Response',
  props<{ error: any }>()
);

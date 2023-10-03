import { createAction, props } from '@ngrx/store';
import { Asset } from './api-core.types';

export const addAsset = createAction(
  '[API Core] Add Asset',
  props<{ asset: Asset }>()
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

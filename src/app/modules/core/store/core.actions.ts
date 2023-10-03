import { createAction, props } from '@ngrx/store';
import { Asset } from './core.types';

export const openMenu = createAction('[Core] Open Menu');
export const closeMenu = createAction('[Core] Close Menu');

export const openTokenDialog = createAction('[Core] Open Token Dialog');
export const closeTokenDialog = createAction('[Core] Close Token Dialog');

export const addAsset = createAction(
  '[Core] Add Asset',
  props<{ asset: Asset }>()
);
export const removeAsset = createAction(
  '[Core] Remove Asset',
  props<{ index: number }>()
);

export const setCurrentAssetId = createAction(
  '[Core] Set Current Asset ID',
  props<{ id: number }>()
);

export const setCurrentAssetGroup = createAction(
  '[Core] Set Current Asset Group',
  props<{ group: string }>()
);

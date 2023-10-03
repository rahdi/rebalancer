import { createAction } from '@ngrx/store';

export const openMenu = createAction('[Core] Open Menu');
export const closeMenu = createAction('[Core] Close Menu');

export const openTokenDialog = createAction('[Core] Open Token Dialog');
export const closeTokenDialog = createAction('[Core] Close Token Dialog');

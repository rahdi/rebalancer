import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { coreStore } from 'modules';

// TODO: use feature state
export interface AppState {
  core: coreStore.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  core: coreStore.coreReducer as ActionReducer<any, Action>,
};

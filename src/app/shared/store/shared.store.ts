import * as apiStore from './api';

export type State = {
  api: apiStore.State;
};

export const reducers = {
  api: apiStore.apiReducer,
};

export const actions = {
  api: apiStore.apiActions,
};

export const selectors = {
  api: apiStore.apiSelectors,
};

export const effects = [apiStore.ApiEffects];

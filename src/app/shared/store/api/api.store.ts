import * as apiAuthStore from './api-auth';
import * as apiCoreStore from './api-core';

export type State = {
  apiAuth: apiAuthStore.State;
  apiCore: apiCoreStore.State;
};

export const reducers = {
  apiAuth: apiAuthStore.reducer,
  apiCore: apiCoreStore.reducer,
};

export const actions = {
  apiAuth: apiAuthStore.actions,
  apiCore: apiCoreStore.actions,
};

export const selectors = {
  apiAuth: apiAuthStore.selectors,
  apiCore: apiCoreStore.selectors,
};

export const effects = [apiAuthStore.Effects];

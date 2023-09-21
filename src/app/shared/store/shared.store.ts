import * as authStore from './auth';

export type State = {
  auth: authStore.State;
};

export const reducers = {
  auth: authStore.authReducer,
};

export const actions = {
  auth: authStore.authActions,
};

export const selectors = {
  auth: authStore.authSelectors,
};

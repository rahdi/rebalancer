import * as apiStore from './api';
import * as snackbarStore from './snackbar';

export type State = {
  api: apiStore.State;
  snackbar: snackbarStore.State;
};

export const reducers = {
  api: apiStore.apiReducer,
  snackbar: snackbarStore.snackbarReducer,
};

export const actions = {
  api: apiStore.apiActions,
  snackbar: snackbarStore.snackbarActions,
};

export const selectors = {
  api: apiStore.apiSelectors,
  snackbar: snackbarStore.snackbarSelectors,
};

export const effects = [apiStore.ApiEffects, snackbarStore.SnackbarEffects];

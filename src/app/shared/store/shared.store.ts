import { apiStore } from './api';
import * as snackbarStore from './snackbar';

export type State = {
  snackbar: snackbarStore.State;
} & apiStore.State;

export const reducers = {
  ...apiStore.reducers,
  snackbar: snackbarStore.snackbarReducer,
};

export const actions = {
  ...apiStore.actions,
  snackbar: snackbarStore.snackbarActions,
};

export const selectors = {
  ...apiStore.selectors,
  snackbar: snackbarStore.snackbarSelectors,
};

export const effects = [...apiStore.effects, snackbarStore.SnackbarEffects];

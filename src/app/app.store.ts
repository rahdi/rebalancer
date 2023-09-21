import { coreStore } from 'modules';
import { sharedStore } from 'shared';

export const appReducer = {
  core: coreStore.coreReducer,
  ...sharedStore.reducers,
};

export type AppState = {
  core: coreStore.State;
} & sharedStore.State;

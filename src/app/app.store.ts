import { coreStore } from 'modules';
import { sharedStore } from 'shared';

export const appReducer = {
  ...sharedStore.reducers,
  core: coreStore.coreReducer,
};

export type AppState = {
  core: coreStore.State;
} & sharedStore.State;

export const appEffects = [...sharedStore.effects, coreStore.CoreEffects];

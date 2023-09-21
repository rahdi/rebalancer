import { createReducer, on } from '@ngrx/store';
import { setIsLoading } from './auth.actions';

export interface State {
  isLoading: boolean;
  user: string | null;
}

const initialState: State = {
  isLoading: false,
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(setIsLoading, (state, action) => ({
    ...state,
    isLoading: action.payload,
  }))
);

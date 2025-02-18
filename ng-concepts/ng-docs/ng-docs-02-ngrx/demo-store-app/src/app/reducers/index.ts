import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { counterReducer } from './counter.reducer';
import { CounterState } from '../store/app.state';

export interface State {
  counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

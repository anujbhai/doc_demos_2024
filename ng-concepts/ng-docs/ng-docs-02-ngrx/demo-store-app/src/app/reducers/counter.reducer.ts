import { createReducer, on } from "@ngrx/store";

import * as CounterActions from "../actions/counter.actions";
import { CounterState } from "../store/app.state";

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({ count: state.count + 1 })),
  on(CounterActions.decrement, (state) => ({
    count: state.count > 0 ? state.count - 1 : state.count // prevent decrement when count value is less than 0
  })),
  on(CounterActions.reset, () => ({ count: 0 })),
);


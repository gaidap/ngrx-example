import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {decrement, increment, init, reset} from "./counter.actions";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {count: 0};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => ({...state, count: state.count + action.incrementBy})),
  on(decrement, (state, action) => ({...state, count: state.count - action.decrementBy})),
  on(reset, (state, action) => ({...state, count: action.resetTo})),
  on(init, (state, action) => ({...state })),
);

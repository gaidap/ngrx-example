import {CounterState} from "./counter.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const selectCounterState = createFeatureSelector<CounterState>('counter');
export const selectCount = createSelector(selectCounterState, (state: CounterState) => state.count);

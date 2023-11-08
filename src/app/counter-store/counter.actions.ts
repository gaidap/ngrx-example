import {createAction, props} from "@ngrx/store";
import {TypedAction} from "@ngrx/store/src/models";

export type CounterActions = ({ incrementBy: number; } & TypedAction<"[Counter Component] Increment">) | ({
  decrementBy: number;
} & TypedAction<"[Counter Component] Decrement">) | ({
  resetTo: number;
} & TypedAction<"[Counter Component] Reset">) | ({
  initTo: number;
} & TypedAction<"[Counter Component] Init">);

export const increment = createAction(
  '[Counter Component] Increment',
  props<{ incrementBy: number }>()
);
export const decrement = createAction(
  '[Counter Component] Decrement',
  props<{ decrementBy: number }>()
);
export const reset = createAction(
  '[Counter Component] Reset',
  props<{ resetTo: number }>()
);
export const init = createAction(
  '[Counter Component] Init',
);

import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of, switchMap, tap, withLatestFrom} from "rxjs";
import {CounterActions, decrement, increment, init, reset} from "./counter.actions";
import {selectCount} from "./counter.selectors";
import {Store} from "@ngrx/store";
import {Injectable} from "@angular/core";

@Injectable()
export class CounterEffects {

  loadCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const count = localStorage.getItem('count');
        if (count) {
          return of(reset({resetTo: +count}));
        }

        return of(reset({resetTo: 0}));
      }),
    );
  });

  saveCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(increment, decrement, reset),
      withLatestFrom(this.store.select(selectCount)),
      tap(([action, count]) => {
        console.log(action);
        this.storeLastCount(count);
        this.storeLastActionLastAction(action);
      }),
    );
  }, {dispatch: false});

  private storeLastCount(count: number) {
    localStorage.setItem('count', count.toString());
  }

  private storeLastActionLastAction(action: CounterActions) {
    let actionValue = this.getActionValue(action);
    localStorage.setItem('lastAction', `${action.type} ${actionValue}`);
  }

  private getActionValue(action: CounterActions) {
    switch (action.type) {
      case increment.type:
        return `by ${action.incrementBy}`;
      case decrement.type:
        return `by ${action.decrementBy}`;
      case reset.type:
        return `to ${action.resetTo}`;
      default:
        return 'unknown action';
    }
  }

  constructor(private actions$: Actions, private store: Store) {
    this.actions$ = actions$;
    this.store = store;
  }
}

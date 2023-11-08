import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {decrement, increment, reset} from "../counter-store/counter.actions";

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store: Store) {
  }

  increment() {
    this.store.dispatch(increment({incrementBy: 1}));
  }

  decrement() {
    this.store.dispatch(decrement({decrementBy: 1}));
  }

  reset() {
    this.store.dispatch(reset({resetTo: 0}));
  }
}

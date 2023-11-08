import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {CounterState} from "../counter-store/counter.reducer";
import {AsyncPipe} from "@angular/common";
import {selectCount} from "../counter-store/counter.selectors";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [
    AsyncPipe
  ]
})
export class CounterOutputComponent {
  count$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.count$ = this.store.select(selectCount);
  }
}

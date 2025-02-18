import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CounterState } from '../store/app.state';
import * as CounterActions from '../actions/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [
    CommonModule,
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  private store = inject(Store<{ counter: CounterState }>);
  count$: Observable<number> = this.store.select((state) => state.counter.count);

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}

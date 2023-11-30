import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
import { IAppState } from '../counter.reducer';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<IAppState>) {
    this.count$ = store.select(state => state.counter.count);
    // this.count$ = store.select('counter', 'count');
  }

  increment() {
    this.store.dispatch(increment());
    // this.store.dispatch({ type: increment });

  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
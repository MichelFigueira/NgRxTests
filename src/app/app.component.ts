import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { decrementaContador, defineContador, IAppState, incrementaContador } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NgRxTests';

  constructor(
    private store: Store<{app: IAppState}>
  ) { }

  ngOnInit(): void {
  }

  counter$ = this.store
    .select('app')
    .pipe(
      map(e => e.counter)
  );

  incrementaContador() {
    this.store.dispatch(incrementaContador())
  }

  decrementaContador() {
    this.store.dispatch(decrementaContador())
  }

  definirContador(valor: string) {
    this.store.dispatch(defineContador({payload: +valor}));
  }

}

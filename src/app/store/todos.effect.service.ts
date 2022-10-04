import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { ITodo } from '../todos/todos.component';
import { IAppState, loadTodos, setTodos, successTodos } from './app.state';

@Injectable({
  providedIn: 'root'
})
export class TodosEffectService {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<{app: IAppState}>
    ) { }

  carregaTodos = createEffect(
    () => this.actions$.pipe(
      ofType(loadTodos),
      withLatestFrom(
        this.store.select('app').pipe(
          map(app => app.todos)
        )
      ),
      switchMap(([ action, todos ]) => {
        if (todos.length === 0) {
          return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
            .pipe(
              tap(todos => this.store.dispatch(setTodos({ payload: todos}))),
              map(() => successTodos())
            )
        }
        return of(successTodos());
      })
    )
  )
}

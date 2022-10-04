import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState, loadTodos } from '../store/app.state';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos$ = this.store.select('app').pipe(
    map(app => app.todos)
  );

  constructor(
    private store: Store<{app: IAppState}>
  ) { }

  ngOnInit(): void {
    	this.store.dispatch(loadTodos());
  }

}

export interface ITodo {
  userId:    number;
  id:        number;
  title:     string;
  completed: boolean;
}

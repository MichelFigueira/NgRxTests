import { createAction, createReducer, on, props } from "@ngrx/store";
import { ITodo } from "../todos/todos.component";

export interface IAppState {
  counter: number;
  todos: ITodo[];
}

export const appInitialState: IAppState = {
  counter: 2,
  todos: []
}

export const incrementaContador = createAction('[App] Aumenta contador');
export const decrementaContador = createAction('[App] Reduz contador');
export const defineContador = createAction('[App] Define contador', props<{ payload: number }>());

export const loadTodos = createAction('[App] Carrega todos');
export const successTodos = createAction('[App] [Sucesso] Carrega todos');
export const setTodos = createAction('[App] Define todos', props<{ payload: ITodo[] }>());

export const appReducer = createReducer(
  appInitialState,
  on(incrementaContador, (state) => {
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state;
  }),
  on(decrementaContador, (state) => {
    state = {
      ...state,
      counter: state.counter - 1
    }
    return state;
  }),
  on(defineContador, (state, action) => {
    state = {
      ...state,
      counter: action.payload
    }
    return state;
  }),
  on(setTodos, (state, action) => {
    state = {
      ...state,
      todos: action.payload
    }
    return state;
  })
)

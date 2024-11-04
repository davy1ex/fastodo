export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const SET_FILTER = 'SET_FILTER';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

interface ClearCompletedAction {
  type: typeof CLEAR_COMPLETED;
}

interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: 'all' | 'active' | 'completed';
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction | ToggleTodoAction | ClearCompletedAction | SetFilterAction;

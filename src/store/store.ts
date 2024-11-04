import { Todo } from './interfaces';
import { TodoActionTypes, ADD_TODO, REMOVE_TODO, TOGGLE_TODO, CLEAR_COMPLETED, SET_FILTER } from './actions';

interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

export const todoReducer = (state: TodoState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      { const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        isCompleted: false,
      };
      return { ...state, todos: [...state.todos, newTodo] }; }

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      };

    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };

    case CLEAR_COMPLETED:
      return { ...state, todos: state.todos.filter(todo => !todo.isCompleted) };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

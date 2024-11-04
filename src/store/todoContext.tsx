import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { todoReducer } from './store';
import { Todo } from './interfaces';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, CLEAR_COMPLETED, SET_FILTER } from './actions';

interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

interface TodoContextType {
  state: TodoState;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  clearCompleted: () => void;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

const initialState: TodoState = {
  todos: [],
  filter: 'all',
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text: string) => dispatch({ type: ADD_TODO, payload: text });
  const toggleTodo = (id: number) => dispatch({ type: TOGGLE_TODO, payload: id });
  const removeTodo = (id: number) => dispatch({ type: REMOVE_TODO, payload: id });
  const clearCompleted = () => dispatch({ type: CLEAR_COMPLETED });
  const setFilter = (filter: 'all' | 'active' | 'completed') => dispatch({ type: SET_FILTER, payload: filter });

  return (
    <TodoContext.Provider
      value={{
        state,
        addTodo,
        toggleTodo,
        removeTodo,
        clearCompleted,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

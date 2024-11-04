import {useEffect} from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { TodoProvider, useTodoContext } from '../store/todoContext';

const TestComponent = () => {
  const { state, addTodo, toggleTodo } = useTodoContext();

  useEffect(() => {
    addTodo('New Task');
  }, []); 

  return (
    <div>
      <span>{state.todos[0]?.text}</span>
      <button onClick={() => toggleTodo(state.todos[0]?.id)}>Toggle</button>
      <span>{state.todos[0]?.isCompleted ? 'Completed' : 'Incomplete'}</span>
    </div>
  );
};

describe('TodoContext', () => {
  test('adds a new todo and toggles its completion status', async () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    expect(screen.getByText('New Task')).toBeInTheDocument();
    expect(screen.getByText('Incomplete')).toBeInTheDocument();

    // use act to wrap the click and state update
    await act(async () => {
      screen.getByText('Toggle').click();
    });

    // ensure the state update has been applied
    await waitFor(() => expect(screen.getByText('Completed')).toBeInTheDocument());
  });
});

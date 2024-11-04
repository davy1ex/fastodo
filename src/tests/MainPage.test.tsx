import { render, screen, fireEvent } from '@testing-library/react';
import MainPage from '../components/MainPage';
import { TodoProvider } from '../store/todoContext';

describe('MainPage', () => {
  it('renders MainPage and adds a new todo', () => {
    render(
      <TodoProvider>
        <MainPage />
      </TodoProvider>
    );

    const input = screen.getByPlaceholderText(/What needs to be done?/i);
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });
});

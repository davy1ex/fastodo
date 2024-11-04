import { render, screen, fireEvent } from '@testing-library/react';
import TodoFooter from '../components/TodoFooter';
import { TodoProvider } from '../store/todoContext';

describe('TodoFooter', () => {
  test('renders correct item count and buttons', () => {
    render(
      <TodoProvider>
        <TodoFooter />
      </TodoProvider>
    );

    expect(screen.getByText(/items left/i)).toBeInTheDocument();
    expect(screen.getByText(/All/i)).toBeInTheDocument();
    expect(screen.getByText(/Active/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Completed/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Clear completed/i)).toBeInTheDocument();
  });

  test('calls setFilter when filter buttons are clicked', () => {
    render(
      <TodoProvider>
        <TodoFooter />
      </TodoProvider>
    );

    const allButton = screen.getByText('All');
    const activeButton = screen.getByText('Active');
    const completedButton = screen.getByText('Completed');

    fireEvent.click(allButton);
    expect(allButton).toHaveClass('selected');

    fireEvent.click(activeButton);
    expect(activeButton).toHaveClass('selected');

    fireEvent.click(completedButton);
    expect(completedButton).toHaveClass('selected');
  });
});

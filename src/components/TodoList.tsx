import { useTodoContext } from '../store/todoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state, toggleTodo, removeTodo } = useTodoContext();
  const { todos, filter } = state;

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return true;
  });

  return (
    <ul style={styles.todoItemWrapper}>
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => toggleTodo(todo.id)}
          onRemove={() => removeTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

const styles = {
    todoItemWrapper: {
        width: "100%",
        margin: "0px",
        listStyle: "none",

        padding: "10px 0"
    }

}

export default TodoList;

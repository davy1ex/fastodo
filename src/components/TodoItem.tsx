import React from 'react';
import { Todo } from '../store/interfaces';


interface TodoItemProps {
    todo: Todo;
    onToggle: () => void;
    onRemove: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => (
    <li style={styles.todoItmes}>
    <input
      type="checkbox"
      style={styles.todoRadio}
      checked={todo.isCompleted}
      onChange={onToggle}
    />
    <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
      {todo.text}
    </span>

  </li>
);

const styles = {
    todoItmes: {
        display: "flex",
        justifyContent: "start"
    },
    todoRadio: {
        width: "1.3em",

        marginRight: "30px",
        height: "1.3em",
        borderRadius: "100%",
        outline: "none"
    }
}

export default TodoItem;

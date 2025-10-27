import React from "react";

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          {todo.text}
          <button onClick={() => onDelete(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
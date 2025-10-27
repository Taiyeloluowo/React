import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import "../App.css";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("All");

    const addTodo = (text) => {
        if (text.trim() === "") return;
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "Active") return !todo.completed;
        if (filter === "Completed") return todo.completed;
        return true;
    });

    const total = todos.length;
    const completed = todos.filter((t) => t.completed).length;

    return (
        <div className="todo-container">
            <h2>My Todo List</h2>

            <TodoInput onAdd={addTodo} />
            <TodoFilter filter={filter} setFilter={setFilter} />

            <TodoList
                todos={filteredTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />

            <div className="todo-summary">
                <p>Total: {total} | Completed: {completed}</p>
                <button onClick={clearCompleted}>Clear Completed</button>
            </div>
        </div>
    );
};

export default TodoApp;
import React from "react";

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div className="todo-filter">
      <span>Filter:</span>
      {["All", "Active", "Completed"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={filter === f ? "active" : ""}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
import React from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ todo, onClickChecked }) => {
  const handleChange = () => {
    onClickChecked(todo.id);
  };

  return (
    <div className="TodoItem">
      <li className={todo.isDone ? "delete" : ""}>
        ◆ {todo.content}
        <input type="checkbox" checked={todo.isDone} onChange={handleChange} />
      </li>
    </div>
  );
};

export default TodoItem;

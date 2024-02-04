import React, { useState } from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ el, onClickChecked }) => {
  const handleChange = () => {
    if (el.isDone) {
      onClickChecked(el.id);
    }

    if (!el.isDone) {
      onClickChecked(el.id);
    }
  };

  return (
    <div className="TodoItem">
      <li className={el.isDone ? "delete" : ""}>
        ◆ {el.content}
        <input
          id={el.id}
          type="checkbox"
          checked={el.isDone}
          onChange={handleChange}
        />
      </li>
    </div>
  );
};

export default TodoItem;

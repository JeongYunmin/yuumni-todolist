import React, { useState } from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ el, onClickChecked }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    if (!checked) {
      !e.target.checked;
      setChecked(true);
      onClickChecked(el.id);
    } else {
      !e.target.checked;
      setChecked(false);
      onClickChecked(el.id);
    }
  };

  return (
    <div className="TodoItem">
      <li>
        {el.content}
        <input
          id={el.id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
      </li>
    </div>
  );
};

export default TodoItem;

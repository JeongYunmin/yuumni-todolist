import React, { useRef, useState } from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ el, onClickChecked }) => {
  let localStrData = JSON.stringify(el);
  let localStrDataId = String(el.id);

  localStorage.setItem(localStrDataId, localStrData);
  console.log(JSON.parse(localStorage.getItem(localStrDataId)).content);

  const handleChange = () => {
    if (el.isDone) {
      onClickChecked(el.id);
    }

    if (!el.isDone) {
      onClickChecked(el.id);
    }
  };

  // 새로고침을 하면.. 요소 자체가 사라지는 것 같움ㅠㅠ DOM을 건드려얄 듯 하다..!!!

  return (
    <div className="TodoItem">
      <li
        className={el.isDone ? "delete" : ""}
        value={JSON.parse(localStorage.getItem(localStrDataId)).content}
      >
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

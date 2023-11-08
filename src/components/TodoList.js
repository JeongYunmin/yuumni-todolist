import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ listArr }) => {
  console.log(listArr);
  return (
    <div className="TodoList">
      {listArr.map((el, idx) => (
        <TodoItem key={idx} />
      ))}
    </div>
  );
};

export default TodoList;

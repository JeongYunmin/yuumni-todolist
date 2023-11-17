import React, { useState } from "react";
import TodoItem from "./TodoItem";
import CreateInput from "./CreateInput";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = (content) => {
    if (content !== "") {
      const newTodo = {
        id: todos.length,
        content: content,
        isDone: false,
      };
      setTodos([newTodo, ...todos]);
    }
  };

  const handleClickChecked = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  console.log(todos);

  return (
    <div className="TodoList">
      <CreateInput handleCreateTodo={handleCreateTodo} />
      {todos.map((el) => (
        <TodoItem key={el.id} el={el} onClickChecked={handleClickChecked} />
      ))}
    </div>
  );
};

export default TodoList;

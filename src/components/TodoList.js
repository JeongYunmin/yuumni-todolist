import React, { useState } from "react";
import TodoItem from "./TodoItem";
import CreateInput from "./CreateInput";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = (content) => {
    // 수정: content를 매개변수로 받음
    const newTodo = {
      id: todos.length,
      content: content, // 수정: content를 사용하여 새로운 todo 생성
      isDone: false,
    };
    setTodos([newTodo, ...todos]);
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

import React, { useState } from "react";
import TodoItem from "./TodoItem";
import CreateInput from "./CreateInput";

const getFormattedDate = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
  };
};

const TodoList = ({ selectedDate }) => {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = (content) => {
    if (content !== "") {
      const newTodo = {
        id: todos.length,
        content: content,
        isDone: false,
        createdAt: getFormattedDate(new Date(selectedDate)),
      };
      setTodos([...todos, newTodo]);
    }
  };

  const handleClickChecked = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    const selectedDateFormatted = getFormattedDate(new Date(selectedDate));
    return (
      todo.createdAt.year === selectedDateFormatted.year &&
      todo.createdAt.month === selectedDateFormatted.month &&
      todo.createdAt.date === selectedDateFormatted.date
    );
  });

  return (
    <div className="TodoList">
      <CreateInput handleCreateTodo={handleCreateTodo} />
      {filteredTodos.map((el) => (
        <TodoItem key={el.id} el={el} onClickChecked={handleClickChecked} />
      ))}
    </div>
  );
};

export default TodoList;

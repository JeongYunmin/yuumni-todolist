import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import CreateInput from "./CreateInput";
import "../styles/TodoList.css";

const getFormattedDate = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
  };
};

const TodoList = ({ selectedDate }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = [];
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      const item = localStorage.getItem(key);
      if (item) {
        storedTodos.push(JSON.parse(item));
      }
    });
    return storedTodos;
  });

  useEffect(() => {
    if (todos) {
      todos.forEach((todo) => {
        localStorage.setItem(String(todo.id), JSON.stringify(todo));
      });
    }
  }, [todos]);

  const handleCreateTodo = (content) => {
    if (content !== "") {
      const newTodo = {
        id: Date.now(),
        content: content,
        isDone: false,
        createdAt: getFormattedDate(new Date(selectedDate)),
      };
      setTodos((prev) => [...prev, newTodo]);
    }
  };

  const handleClickChecked = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const filteredTodos =
    todos &&
    todos.filter((todo) => {
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
      {filteredTodos &&
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            onClickChecked={handleClickChecked}
          />
        ))}
    </div>
  );
};

export default TodoList;

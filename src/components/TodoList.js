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
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    return storedTodos;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
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
  }; // 위의 클릭체크 함수의 로직에 대해 알아보자!!!!!!!!!!!!!!!!!

  const handleRemove = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // 로컬 스토리지에서도 제거
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
            onClickChecked={handleClickChecked}
            onRemove={handleRemove} // 삭제 기능 추가
          />
        ))}
    </div>
  );
};

export default TodoList;

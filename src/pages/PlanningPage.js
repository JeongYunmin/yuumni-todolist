import React, { useState, useRef } from "react";
import "../styles/PlanningPage.css";
import Calendar from "../components/Calendar";
import CreateInput from "../components/CreateInput";
import TodoList from "../components/TodoList";

const PlanningPage = () => {
  const [listArr, setListArr] = useState([]);
  const createInput = useRef();

  const handleCreate = () => {
    if (createInput.current.value) {
      const newTodo = {
        createdAt: new Date(),
        isDone: false,
        content: createInput.current.value,
        id: listArr.length + 1,
      };
      setListArr([newTodo, ...listArr]);
      createInput.current.value = "";
    }
  };

  return (
    <div className="PlanningPage">
      <Calendar />
      <CreateInput handleCreate={handleCreate} createInput={createInput} />
      <TodoList listArr={listArr} />
    </div>
  );
};

export default PlanningPage;

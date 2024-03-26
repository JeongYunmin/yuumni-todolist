import React, { useState } from "react";
import "../styles/PlanningPage.css";
import Calendar from "../components/Calendar";
import TodoList from "../components/TodoList";

const PlanningPage = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleNewTodoDate = (selected) => {
    setSelectedDate(selected);
  };

  return (
    <div className="PlanningPage">
      <Calendar onChange={handleNewTodoDate} />
      <TodoList selectedDate={selectedDate} />
    </div>
  );
};

export default PlanningPage;

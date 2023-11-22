import React, { useState } from "react";
import "../styles/PlanningPage.css";
import Calendar from "../components/Calendar";
import TodoList from "../components/TodoList";

const PlanningPage = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleChildChange = (childData) => {
    setSelectedDate(childData);
  };

  return (
    <div className="PlanningPage">
      <Calendar parentState={selectedDate} onChildChange={handleChildChange} />
      <TodoList selectedDate={selectedDate} />
    </div>
  );
};

export default PlanningPage;

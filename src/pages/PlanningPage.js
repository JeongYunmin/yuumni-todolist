import React from "react";
import "../styles/PlanningPage.css";
import Calendar from "../components/Calendar";

import TodoList from "../components/TodoList";

const PlanningPage = () => {
  return (
    <div className="PlanningPage">
      <Calendar />
      <TodoList />
    </div>
  );
};

export default PlanningPage;

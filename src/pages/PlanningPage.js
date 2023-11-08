import React from "react";
import "../styles/PlanningPage.css";
import Calendar from "../components/Calendar";
import CreateInput from "../components/CreateInput";

const PlanningPage = () => {
  return (
    <div className="PlanningPage">
      <Calendar />
      <CreateInput />
    </div>
  );
};

export default PlanningPage;

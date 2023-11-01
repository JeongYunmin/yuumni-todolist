import React from "react";
import "../styles/PlanningPage.css";
import Header from "../components/Header";
import Calendar from "../components/Calendar";

const PlanningPage = () => {
  return (
    <div className="PlanningPage">
      {/* <Header /> */}
      <Calendar />
    </div>
  );
};

export default PlanningPage;

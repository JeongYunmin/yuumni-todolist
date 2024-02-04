import React from "react";
import "./App.css";

import MainCover from "./pages/MainCover";
import PlanningPage from "./pages/PlanningPage";

function App() {
  return (
    <>
      <div className="MainCover_container">
        <MainCover />
      </div>
      <div className="PlanningPage_container">
        <PlanningPage />
      </div>
    </>
  );
}

export default App;

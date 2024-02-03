import React from "react";
import "./App.css";

import MainCover from "./pages/MainCover";
import PlanningPage from "./pages/PlanningPage";

function App() {
  // 변수 선언 = 창이 새로고침 됨.

  // if (위의 변수) {
  //   창이 새로고침 되어도,, 요소의 높이를 유지한다는 내용..
  // }

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

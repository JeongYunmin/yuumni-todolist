import React from "react";
import "../styles/Btn.css";

const Btn = ({ type, onClick }) => {
  let btnLetter = "";

  if (type === "left") {
    btnLetter = "<";
  } else if (type === "right") {
    btnLetter = ">";
  } else if (type === "remove") {
    btnLetter = "X";
  }

  return (
    <div className="Btn">
      <button onClick={onClick} className={type}>
        {btnLetter}
      </button>
    </div>
  );
};

export default Btn;

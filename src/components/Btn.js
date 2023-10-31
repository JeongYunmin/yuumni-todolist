import React from "react";

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
      <button onClick={onClick}>{btnLetter}</button>
    </div>
  );
};

export default Btn;

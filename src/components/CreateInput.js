import React, { useState } from "react";
import Btn from "./Btn";
import "../styles/CreateInput.css";

const CreateInput = ({ handleCreateTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="CreateInput">
      <form onSubmit={handleSubmit}>
        <input
          className="typing_input_for_create"
          onChange={handleChange}
          value={inputValue}
        />
        <Btn type="create">Create</Btn>
      </form>
    </div>
  );
};

export default CreateInput;

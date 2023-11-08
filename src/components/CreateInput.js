import React from "react";
import Btn from "./Btn";

const CreateInput = ({ handleCreate, createInput }) => {
  return (
    <div className="CreateInput">
      <input
        ref={createInput}
        className="typing_input_for_create"
        onChange={(e) => e.target.value}
      />
      <Btn onClick={handleCreate} type="create"></Btn>
    </div>
  );
};

export default CreateInput;

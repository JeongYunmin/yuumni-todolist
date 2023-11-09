import React, { useState } from "react";
import Btn from "./Btn";

const CreateInput = ({ handleCreateTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value); // 추가: input 값 변경 시 상태 업데이트
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateTodo(inputValue); // 수정: handleCreateTodo에 inputValue 전달
    setInputValue(""); // 추가: submit 후 input 초기화
  };

  return (
    <div className="CreateInput">
      <form onSubmit={handleSubmit}>
        {" "}
        {/* 수정: form의 onSubmit 이벤트 추가 */}
        <input
          className="typing_input_for_create"
          onChange={handleChange}
          value={inputValue}
        />
        <Btn type="create">Create</Btn>{" "}
        {/* 수정: onClick 제거, type은 부모에서 받음 */}
      </form>
    </div>
  );
};

export default CreateInput;

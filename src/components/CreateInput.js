import React, { useRef, useState } from "react";
import Btn from "./Btn";
import TodoItem from "./TodoItem";

const CreateInput = () => {
  const [todo, setTodo] = useState({
    createdAt: new Date().getTime(), // getTime 메서드가 무엇을 출력하는지 콘솔 찍어볼 것...!!!
    isDone: false,
    content: "",
    Key: null,
  });

  const createInput = useRef();

  const handleCreate = (e) => {
    e.preventDefault();

    let keyNum = 1;

    setTodo({
      ...todo,
      content: createInput.current.value,
      key: keyNum,
    });

    keyNum++;
  };

  return (
    <div className="CreateInput">
      <input
        ref={createInput}
        className="typing_input_for_create"
        onChange={(e) => e.target.value}
      />
      <Btn onClick={handleCreate} type="create"></Btn>
      <TodoItem todo={todo} />
    </div>
  );
};

export default CreateInput;

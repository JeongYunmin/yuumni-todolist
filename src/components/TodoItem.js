import React, { useState } from "react";
import "../styles/TodoItem.css";
import Btn from "./Btn";
import Modal from "react-modal";

const TodoItem = ({ todo, todos, setTodos, onClickChecked }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = () => {
    onClickChecked(todo.id);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleRemove = () => {
    const updatedTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(updatedTodos);

    const keys = Object.keys(localStorage);
    if (keys.includes(String(todo.id))) {
      localStorage.removeItem(String(todo.id));
    }

    closeModal();
  };

  return (
    <>
      <div className="TodoItem">
        <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          해당 할 일을 삭제하시겠습니까?
          <div className="modal-btn-wrapper">
            <buton className="modal-yes-btn" onClick={handleRemove}>
              예
            </buton>
            <buton className="modal-no-btn" onClick={closeModal}>
              아니오
            </buton>
          </div>
        </Modal>
        <li className={todo.isDone ? "delete" : ""}>
          ◆ {todo.content}
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={handleChange}
          />
          <Btn onClick={openModal} />
        </li>
      </div>
    </>
  );
};

export default TodoItem;

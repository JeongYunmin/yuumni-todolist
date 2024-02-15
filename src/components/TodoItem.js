import React, { useState } from "react";
import "../styles/TodoItem.css";
import Btn from "./Btn";
import Modal from "react-modal";

const TodoItem = ({ todo, onClickChecked, onRemove }) => {
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
    onRemove(todo.id);
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
            <button className="modal-yes-btn" onClick={handleRemove}>
              예
            </button>
            <button className="modal-no-btn" onClick={closeModal}>
              아니오
            </button>
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

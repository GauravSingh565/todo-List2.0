import React, { useState } from "react";
import "./todo.css";
import Modal from "../modal/Modal";
const TodoInput = (props) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState();
  const addTaskHandler = (e) => {
    setTodo(e.target.value);
  };
  const addNewTodoHandler = () => {
    if (todo.length === 0) {
      setError({ display: "block" });
      return;
    }
    const data = {
      enteredValue: todo,
      id: Math.random().toString(),
    };
    props.onAddNewListHandler(data);
    setTodo("");
  };
  const onDeleteModal = () => {
    setError(null);
  };
  return (
    <>
      {error && <Modal show={error} delete={onDeleteModal} />}

      <div className="inputDiv">
        <input
          type="text"
          placeholder="✍️ Add Your Task"
          onChange={addTaskHandler}
          value={todo}
        />

        <i className="fas fa-plus btn" onClick={addNewTodoHandler}></i>      
        </div>
    </>
  );
};

export default TodoInput;

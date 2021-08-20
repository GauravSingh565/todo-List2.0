import React, { useState } from "react";
import "./listItem.css";
const ListElement = (props) => {
  const [edit, setEdit] = useState("");
  const [editId, setEditId] = useState(null);
  const [showEdit, setShowEdit] = useState(true);
  const deleteHandler = (key) => {
    props.onDeleteBtn(key);
  };
  const clearAllTodoHandler = () => {
    props.onClearBtn();
  };
  const editHandler = (e) => {
    const editedItem = props.listItem.find((elem) => {
      return elem.id === e;
    });
    setEdit(editedItem.enteredValue);
    setEditId(e);
    setShowEdit(false);
  };
  const editTodoHandler = (e) => {
    setEdit(e.target.value);
  };
  const editItemHandler = () => {
    const editedData = props.listItem.map((elem) => {
      if (elem.id === editId) {
        return { ...elem, enteredValue: edit };
      }
      return elem;
    });
    props.onEditBtn(editedData);

    setEdit("");
    setShowEdit(true);
  };
  return (
    <>
      {showEdit ? (
        <div className="listDiv">
          {props.listItem.map((todo) => {
            return (
              <div className="list" key={todo.id}>
                <p className="listData">{todo.enteredValue}</p>
                <div className="div">
                  <i
                    className="fas fa-edit editBtn"
                    onClick={() => editHandler(todo.id)}
                  ></i>
                  <i
                    className="fas fa-trash deleteBtn"
                    onClick={() => deleteHandler(todo.id)}
                  ></i>
                </div>
              </div>
            );
          })}
          {props.listItem.length !== 0 && (
            <button
              type="button"
              className="clearBtn"
              onClick={clearAllTodoHandler}
            >
              Clear List
            </button>
          )}
        </div>
      ) : (
        <div className="editDiv">
          <input type="text" value={edit} onChange={editTodoHandler} />
          <i className="fas fa-edit btn" onClick={editItemHandler}></i>
        </div>
      )}
    </>
  );
};

export default ListElement;

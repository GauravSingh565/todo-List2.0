import React from "react";
import "./modal.css";
const Modal = (props) => {
  return (
    <>
      <div className="backDrop" onClick={props.delete} />
      <div className="modalDiv" style={props.err}>
        <div className="header">
          <h2>Error Occurred !</h2>
          <i className="fas fa-times" onClick={props.delete}></i>
        </div>
        <h3>Please Enter Some Task First</h3>
      </div>
    </>
  );
};

export default Modal;

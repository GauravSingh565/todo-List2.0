import React, { useState, useEffect } from "react";
import "./index.css";
import img from "./image/file.png";
import TodoInput from "./components/Input/TodoInput";
import ListElement from "./components/List/ListElement";
const getLcItems = () => {
  let list = localStorage.getItem("todoList");
  if (list) {
    return JSON.parse(localStorage.getItem("todoList"));
  } else {
    return [];
  }
};

const App = () => {
  const [todoList, setTodoList] = useState(getLcItems());

  const newTodoHandler = (newTodo) => {
    setTodoList((prevState) => {
      return [newTodo, ...prevState];
    });
  };
  const delHandler = (e) => {
    const filterList = todoList.filter((elem) => {
      return e !== elem.id;
    });
    setTodoList(filterList);
  };
  const clearAllDataHandler = () => {
    setTodoList([]);
  };

  const onEditHandler = (e) => {
    setTodoList(e);
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <>
      <div className="container">
        <figure className="figure">
          <img src={img} alt="logoImg" className="logo" />
          <figcaption>Add Your List Here 🤟</figcaption>
        </figure>
        <TodoInput onAddNewListHandler={newTodoHandler} />
        <ListElement
          listItem={todoList}
          id={todoList.id}
          onDeleteBtn={delHandler}
          onClearBtn={clearAllDataHandler}
          onEditBtn={onEditHandler}
        />
      </div>
    </>
  );
};

export default App;

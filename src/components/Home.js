import React, { useState } from "react";

import Todos from "./Todos";
import cls from "../styles/Home.module.css";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleChildData = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemove = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <div className={cls.container}>
      <div className="main">
        <NewTodo onGetChild={handleChildData} />
      </div>
      <div className="todoList">
        <Todos todos={todos} onRemoveTodo={handleRemove} />
      </div>
    </div>
  );
};

export default Home;

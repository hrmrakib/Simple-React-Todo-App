import React from "react";

import Todo from "./Todo";
import cls from "../styles/Todos.module.css";
const Todos = (props) => {
  return (
    <section className={cls.todos}>
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.todo}
          id={todo.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </section>
  );
};

export default Todos;

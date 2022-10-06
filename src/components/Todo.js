import React from "react";
import cls from "../styles/Todo.module.css";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleRemoveClick = (id) => {
    props.onRemoveTodo(id);
  };
  return (
    <article className={cls.todo}>
      <div className={cls.content}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div title="Remove this todo" className={cls.deleteBtn}>
        <button onClick={() => handleRemoveClick(id)}>
          <span className="material-icons-outlined">delete</span>
        </button>
      </div>
    </article>
  );
};

export default Todo;

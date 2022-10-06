import React, { useState } from "react";
import cls from "../styles/NewTodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const { title, desc } = todo;

  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onGetChild(todo);

    setTodo({ title: "", desc: "" });
  };

  return (
    <div>
      <h2 className={cls.h2}>
        TODO APP
        <small>by Rakib</small>
      </h2>
      <form className={cls.form} onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            id="title"
            placeholder="Enter Title"
            required
          />
        </label>
        <textarea
          name="desc"
          value={desc}
          onChange={handleChange}
          placeholder="Description"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewTodo;

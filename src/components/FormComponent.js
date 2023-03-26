import React from "react";
import { addToDo } from "./toDoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const FormComponent = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addToDo(task));
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskInput">Task</label>
      <input
        id="taskInput"
        name="task"
        type="text"
        value={task}
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

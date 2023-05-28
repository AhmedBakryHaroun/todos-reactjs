import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../../features/slices/taskSlice";
import { v4 as uuidv4 } from "uuid";

//
const InitialStateX = {
  task: "",
  taskError: null,
};
const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(InitialStateX);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      [`${event.target.name}Error`]: null,
    });
  };

  //ADD NEW TASK
  const addNewTask = () => {
    if (state.task === "") {
      setState({ ...state, taskError: "You must Write Somthing!" });
    }
    const newTask = {
      _id: uuidv4(),
      task: state.task,
      completed: false,
      createdAt: Date.now(),
    };
    dispatch(addTask(newTask));
    setState(InitialStateX);
  };
  //submittung the form
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewTask();
  };

  return (
    <form onSubmit={handleSubmit} className="formx ">
      <h4 className="text-light fw-bold fst-italic px-2 logo">Add New</h4>
      <div className="form-floating mb-2">
        <input
          onChange={handleChange}
          value={state.task}
          type="text"
          name="task"
          className="form-control  text-light bg-dark border-0"
          id="task"
          placeholder="task"
        />
        <label className="text-light" htmlFor="task">
          task
        </label>
      </div>
      <button
        disabled={state.task === "" ? true : false}
        className="btn px-4 btn-lg btn-outline-primary"
        type="submit"
      >
        Add
      </button>
      {state.taskError ? <div className="error">{state.taskError}</div> : null}
    </form>
  );
};

export default Form;

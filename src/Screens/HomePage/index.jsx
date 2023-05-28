import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import Task from "../../components/Tasks/Task/Task";
import Form from "../../components/Tasks/Form/index";
import Data from "../../data/todos.json";
import {
  getTasks,
  deleteTask,
  addTask,
  toggleComplete,
} from "../../features/slices/taskSlice";
import { v4 as uuidv4 } from "uuid";

//
const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTasks);
  const [text, setText] = useState("");
  const deleteTasky = (id) => {
    dispatch(deleteTask(id));
  };
  const toogleCompleted = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      _id: uuidv4(),
      title: text,
      completed: false,
      createdAt: new Date(),
    };
    dispatch(addTask(newTask));
    setText("");
  };

  useEffect(() => {
    console.log(text);
  }, [dispatch]);
  return (
    <section className="container" style={{}}>
      <div className="row mt-4 ">
        <div className="col-md-8 mx-auto">
          <Form text={text} setText={setText} />
        </div>
        <div className="col-md-8 mx-auto">
          {todos.length !== 0 ? (
            todos.map((todo, index) => (
              <Task
                toogleCompleted={toogleCompleted}
                deleteTask={deleteTasky}
                task={todo}
                key={index}
              />
            ))
          ) : (
            <div className="alert shadow-lg bg-dark text-light border-0 alert-dark">
              <div className="text-center">
                <h4 className="fw-bold text-danger">No Tasks yet !</h4>
                <p className="fw-bold text-danger">Common add new task</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import "./style.css";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Button, FormControlLabel, Checkbox, Avatar } from "@material-ui/core";
import moment from "moment";
// import EditIcon from "@material-ui/icons/Edit";

//
const Task = ({ task, deleteTask, toogleCompleted }) => {
  return (
    <div
      className="alert task shadow-md bg-dark text-light border-0 alert-dark"
      role="alert"
    >
      <div className="avatar me-4">
        <Avatar
          style={{ width: "32px", height: "32px" }}
          className="text-primary bg-light"
        />
      </div>
      <div className="checkbox">
        <FormControlLabel
          onClick={() => toogleCompleted(task._id)}
          value="bottom"
          control={<Checkbox color="primary" />}
          label="Done"
          checked={task.completed}
          className="me-4"
        />
      </div>
      <div className="div">
        <h4
          style={{
            textDecoration: task.completed ? "line-through" : "",
          }}
          className="text-primary fw-bold fst-italic my-0 px-2"
        >
          {task.task}
        </h4>
        <small className="fst-italic  bg-dark text-secondary fw-bold fst-italic px-2 fw-bold text-primary">
          {moment(task.createdAt).fromNow()}
        </small>{" "}
      </div>
      <ButtonGroup
        style={{ marginLeft: "auto" }}
        className="btn__group   d-flex justify-content-end align-items-center "
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        {/* <Button>
          <EditIcon />
        </Button> */}

        <Button onClick={() => deleteTask(task._id)} color="secondary">
          <DeleteOutlineOutlinedIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Task;

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const InitialState = {
  tasks: [],
  counter: 0,
  currentTask: null,
};
const taskSlice = createSlice({
  name: "tasks",
  initialState: InitialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [action.payload, ...state.tasks];
    },
    deleteTask: (state, action) => {
      let taskz = state.tasks;
      state.tasks = taskz.filter((task) => {
        return task._id !== action.payload;
      });
    },
    toggleComplete: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task._id === action.payload) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      });
    },
    clearState: (state, action) => {
      state.todos = [];
      state.counter = 0;
    },
  },
});
export const { addTask, deleteTask, toggleComplete } = taskSlice.actions;

export const getTasks = (state) => state.tasks.tasks;
export const getCounter = (state) => state.tasks.counter;

export default taskSlice.reducer;

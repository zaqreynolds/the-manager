import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newToDo = {
        id: uuidv4(),
        task: action.payload,
        isCompleted: false,
      };
      state.push(newToDo);
    },
    removeToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
    setCompleted: (state, action) => {
      const thisToDoIndex = state.findIndex(
        (toDo) => toDo.id === action.payload
      );
      state[thisToDoIndex].isCompleted = !state[thisToDoIndex].isCompleted;
      return state;
    },
  },
});

export const { addToDo, removeToDo, setCompleted } = toDoSlice.actions;
export default toDoSlice.reducer;

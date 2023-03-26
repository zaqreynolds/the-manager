import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./components/toDoSlice";

export const store = configureStore({
  reducer: {
    toDos: toDoReducer,
  },
});

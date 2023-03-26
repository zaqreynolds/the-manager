import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeToDo, setCompleted } from "./toDoSlice";

export const ListComponent = () => {
  const toDos = useSelector((state) => state.toDos);
  const dispatch = useDispatch();

  const handleClickDelete = (toDo) => {
    dispatch(removeToDo(toDo.id));
  };
  const handleClickCheckbox = (toDo) => {
    dispatch(setCompleted(toDo.id));
  };

  return (
    <div>
      <ul>
        {toDos.map((toDo) => {
          return (
            <li key={toDo.id}>
              {toDo.task}
              <button onClick={() => handleClickDelete(toDo)}>Delete</button>
              <input
                type="checkbox"
                checked={toDo.isCompleted}
                onChange={() => handleClickCheckbox(toDo)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

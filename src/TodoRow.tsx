import React, { FC } from "react";
import Checkbox from "./Checkbox";
import { ITodo } from "./interfaces";
type TodoProps = {
  todo: ITodo;
  key: number;
};
const TodoRow: FC<TodoProps> = ({ todo, key }) => {
  console.log("JDFDDF", todo);
  return (
    <div key={key} className="flex space-x-2 ">
      <Checkbox />
      <h3>{todo}</h3>
    </div>
  );
};

export default TodoRow;

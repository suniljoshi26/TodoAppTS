import React, { FC } from "react";
import { ITodo } from "./interfaces";
type TodoProps = {
  todo: ITodo;
  key: number;
};
const TodoRow: FC<TodoProps> = ({ todo, key }) => {
  console.log("JDFDDF", todo);
  return (
    <div key={key}>
      <h3>{todo}</h3>
    </div>
  );
};

export default TodoRow;

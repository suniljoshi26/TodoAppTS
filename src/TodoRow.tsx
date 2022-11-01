import React, { FC } from "react";
import Checkbox from "./Checkbox";
import { ITodo } from "./interfaces";
type TodoProps = {
  todo: ITodo;
  key: number;
  done: boolean;
  onStatusChange: any;
};
const TodoRow: FC<TodoProps> = ({ todo, key, done, onStatusChange }) => {
  console.log("JDFDDF", todo);
  const onChackBoxChange = () => {
    onStatusChange(todo);
  };
  return (
    <div key={key} className="flex space-x-2 ">
      <Checkbox checked={done} onChange={onChackBoxChange} />
      <h3>{todo}</h3>
    </div>
  );
};

export default TodoRow;

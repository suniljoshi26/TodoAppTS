import React, { FC } from "react";
import Checkbox from "./Checkbox";
import { ITodo } from "./interfaces";
import { TiDeleteOutline } from "react-icons/ti";
type TodoProps = {
  todo: any;
  key: number;
  done: boolean;
  onStatusChange: any;
  onDelete: any;
};
const TodoRow: FC<TodoProps> = ({
  todo,
  key,
  done,
  onStatusChange,
  onDelete,
}) => {
  console.log("JDFDDF", todo);
  const onChackBoxChange = () => {
    onStatusChange(todo);
  };
  const onDeleteTodo = () => {
    console.log("delete");
    onDelete(todo, done);
  };
  return (
    <div key={key} className="flex space-x-2 items-center">
      <Checkbox checked={done} onChange={onChackBoxChange} />
      <h3>{todo}</h3>
      <TiDeleteOutline onClick={onDeleteTodo} />
    </div>
  );
};

export default TodoRow;

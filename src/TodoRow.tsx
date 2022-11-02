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
    <div
      key={key}
      className="flex justify-between space-x-2 items-center p-2 border  rounded-md shadow-md w-72"
    >
      <div className=" flex items-center space-x-2">
        <Checkbox checked={done} onChange={onChackBoxChange} />
        <h3 className=" text-xl items-center mb-1">{todo}</h3>
      </div>
      <TiDeleteOutline onClick={onDeleteTodo} className="text-2xl " />
    </div>
  );
};

export default TodoRow;

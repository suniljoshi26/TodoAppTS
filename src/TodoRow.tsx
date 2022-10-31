import React, { FC } from "react";
type TodoProps = {
  children: String;
};
const TodoRow: FC<TodoProps> = ({ children }) => {
  return (
    <div>
      <h3>{children}</h3>
    </div>
  );
};

export default TodoRow;

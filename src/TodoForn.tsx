import React from "react";
import Button from "./Button";
import H3 from "./H3";
import Input from "./Input";

const TodoForn = () => {
  return (
    <div className="border border-gray-200 p-4  mt-4">
      <H3 title="Create a todo" />
      <div className="mt-4">
        <Input />
      </div>
      <div className="space-x-6 mt-4 ">
        <Button>Save</Button>
        <Button them="secondary">Cancle</Button>
      </div>
    </div>
  );
};

export default TodoForn;

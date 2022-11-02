import React, { useState } from "react";
import Button from "./Button";
import H3 from "./H3";
import Input from "./Input";

const TodoForn = (props: any) => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: any) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleSave = () => {
    props.handleHideForm();
    props.addTodo(input);
  };
  return (
    <div className="border border-gray-200 rounded-md shadow-md p-4  mt-4">
      <H3 title="Create a todo" />
      <div className="mt-4">
        <Input value={input} onChange={handleInputChange} />
      </div>
      <div className="space-x-6 mt-4 ">
        <Button onClick={handleSave}>Save</Button>
        <Button them="secondary" onClick={props.handleHideForm}>
          Cancle
        </Button>
      </div>
    </div>
  );
};

export default TodoForn;

import { FC, useState } from "react";
import Button from "./Button";
import H1 from "./H1";
import H3 from "./H3";
import Input from "./Input";
import { NavBar } from "./NavBar";
import TodoForn from "./TodoForn";
import TodoRow from "./TodoRow";
import { It } from "./type";


function App() {
  const [formVisable, setFormVisable] = useState(false);
  const [todo, setTodo] = useState<It[]>([]);
  console.log("todo", todo);


  const addTodo:FC<It> = (props):void => {
    {taskName:props.task}
    const new =[...todo,task]

    setTodo(new);
  };
  const handleShowForm = () => {
    setFormVisable(true);
  };
  const handleHideForm = () => {
    setFormVisable(false);
  };

  return (
    <div>
      {" "}
      <NavBar />
      <div className="px-32">
        <H1 title=" Things to get done"></H1>
        <H3 title="Things to do"></H3>
        {todo.map((todo:any) => (
          <TodoRow>{todo}</TodoRow>
        ))}
        {!formVisable && (
          <Button them="highlight" onClick={handleShowForm}>
            + Add todo
          </Button>
        )}
        {formVisable && (
          <TodoForn handleHideForm={handleHideForm} addTodo={addTodo} />
        )}
        <H3 title="Things to done"></H3>
      </div>
    </div>
  );
}

export default App;

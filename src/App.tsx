import { FC, useState } from "react";
import Button from "./Button";
import H1 from "./H1";
import H3 from "./H3";
import { ITodo } from "./interfaces";
import { NavBar } from "./NavBar";
import TodoForn from "./TodoForn";
import TodoRow from "./TodoRow";

const App: FC = () => {
  const [formVisable, setFormVisable] = useState(false);
  const [todoList, setTodo] = useState<ITodo[]>([]);

  console.log("todo", todoList);

  const addTodo = (task: any) => {
    const t = [...todoList, task];
    console.log("yty", t);
    setTodo(t);
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
        {todoList.map((todo: ITodo, key: number) => (
          <TodoRow key={key} todo={todo} />
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
};

export default App;

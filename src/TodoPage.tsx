import { FC, useState } from "react";
import Button from "./Button";
import H1 from "./H1";
import H3 from "./H3";

import { ITodo } from "./interfaces";
import Msg from "./Msg";
import { NavBar } from "./NavBar";
import TodoForn from "./TodoForn";
import TodoRow from "./TodoRow";

const TodoPage: FC = () => {
  const a = JSON.parse(localStorage.getItem("todoList") || "[]");
  const b = JSON.parse(localStorage.getItem("doneList") || "[]");
  const [formVisable, setFormVisable] = useState(false);
  const [todoList, setTodoList] = useState<ITodo[]>(a);
  const [doneList, setDoneList] = useState<ITodo[]>(b);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  localStorage.setItem("doneList", JSON.stringify(doneList));

  console.log("todo", todoList);

  const addTodo = (todo: any) => {
    const t = [...todoList, todo];
    console.log("yty", t);
    setTodoList(t);
  };
  const handleShowForm = () => {
    setFormVisable(true);
  };
  const handleHideForm = () => {
    setFormVisable(false);
  };
  const markAsNotDone = (todo: ITodo) => {
    const newDone = doneList.filter((task) => task !== todo);

    setDoneList(newDone);
    setTodoList([...todoList, todo]);
  };
  const markAsDone = (todo: ITodo) => {
    const newTodo = todoList.filter((task) => task !== todo);

    console.log("new todo", newTodo);
    setTodoList(newTodo);

    setDoneList([...doneList, todo]);
    console.log("sdasds", newTodo.length);
  };
  const todoDelete = (todo: ITodo, done: boolean) => {
    console.log("delete", todo);
    if (done) {
      const newDoneList = doneList.filter((task) => task !== todo);
      setDoneList(newDoneList);
    } else {
      const newTodoList = todoList.filter((task) => task !== todo);
      setTodoList(newTodoList);
    }
  };
  const handleRef = () => {
    setDoneList([]);
    setTodoList([]);
  };

  return (
    <div className=" ">
      {" "}
      <NavBar todoList={todoList} doneList={doneList} />
      <div className=" px-10 sm:px-32">
        {" "}
        <div className="flex justify-end">
          <Button className="sm:mt-32 mt-16" onClick={handleRef}>
            refresh
          </Button>
        </div>
        <H1 title=" Things to get done" />
        <H3 title="Things to do"></H3>
        {todoList.length === 0 && <Msg />}
        {todoList.map((todo, key: number) => (
          <TodoRow
            key={key}
            todo={todo}
            done={false}
            onStatusChange={markAsDone}
            onDelete={todoDelete}
          />
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
        {doneList.length === 0 && <Msg />}
        {doneList.map((todo: ITodo, key: number) => (
          <TodoRow
            key={key}
            todo={todo}
            done={true}
            onStatusChange={markAsNotDone}
            onDelete={todoDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoPage;

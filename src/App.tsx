import { useState } from "react";
import Button from "./Button";
import H1 from "./H1";
import H3 from "./H3";
import Input from "./Input";
import { NavBar } from "./NavBar";
import TodoForn from "./TodoForn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {" "}
      <NavBar />
      <H1 title=" Things to get done"></H1>
      <H3 title="Things to do"></H3>
      <TodoForn />
    </div>
  );
}

export default App;

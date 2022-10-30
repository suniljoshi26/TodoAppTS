import { useState } from "react";
import H1 from "./H1";
import { NavBar } from "./NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {" "}
      <NavBar />
      <H1 title=" Things to get done"></H1>
    </div>
  );
}

export default App;

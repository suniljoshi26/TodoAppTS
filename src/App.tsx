import { useState } from "react";
import H1 from "./H1";
import H3 from "./h3";
import { NavBar } from "./NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {" "}
      <NavBar />
      <H1 title=" Things to get done"></H1>
      <H3 title="ettwertw"></H3>
    </div>
  );
}

export default App;

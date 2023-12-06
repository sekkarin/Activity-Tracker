import { useState } from "react";
import "./App.css";
import Workout from "./pages/Workout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Workout />
    </>
  );
}

export default App;

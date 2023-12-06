import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@nextui-org/react";
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

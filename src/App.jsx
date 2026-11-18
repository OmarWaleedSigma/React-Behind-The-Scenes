import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  const handleChosenCount = (count) => {
    setChosenCount(count);
    setChosenCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSetChosenCount={handleChosenCount} />
        <Counter initialCount={chosenCount} key={chosenCount}/>
      </main>
    </>
  );
}

export default App;

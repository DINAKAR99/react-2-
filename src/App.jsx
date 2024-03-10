import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UseStateArray } from "./components/UseStateArray";
import { UseStateObject } from "./components/UseStateObject";
import { UseStateGotcha } from "./components/UseStateGotcha";
import { UseEffectBasics } from "./components/Effect/UseEffectBasics";
import { MultipleEffects } from "./components/Effect/Multiple-effects";
import { FetchData } from "./components/Effect/FetchData";
import { MultiReturnBasics } from "./components/Effect/MultiReturnBasics";
import { MultipleReturnFetchData } from "./components/Effect/MultipleReturnFetchData";
import { ShortCircuit } from "./components/Effect/ShortCircuit";

import { UserChallenge } from "./components/UserChallenge";
import ControlledInput from "./components/ControlledInput";
import UncontrolledInput from "./components/UncontrolledInput";
import UseRefBasics from "./components/UseRefBasics";
import { Toggle_example } from "./components/Effect/Toggle_example.1";
import { UseReducer } from "./components/UseReducer";
import { Sample } from "./components/Sample";
import { LatestReact } from "./components/Effect/LatestReact";
import { SlowComponent } from "./components/Effect/SlowComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <LatestReact />
    </>
  );
}

export default App;

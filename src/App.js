import "./App.scss";

import { useState } from "react";

import Options from "./pages/Options";
import Today from "./pages/Today";
import Stats from "./pages/Stats";

function App() {
  const [activePage, setActivePage] = useState(<Options />);

  return (
    <div>
      <h1>MoodMap</h1>
      <nav id="topNav">
        <ul>
          <li>
            <button
              onClick={() => {
                setActivePage(<Options />);
              }}
            >
              Options
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActivePage(<Today />);
              }}
            >
              Today
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActivePage(<Stats />);
              }}
            >
              Stats
            </button>
          </li>
        </ul>
      </nav>
      {activePage}
    </div>
  );
}

export default App;

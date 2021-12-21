import "./App.scss";
import { useState } from "react";
import Options from "./pages/Options";
import Today from "./pages/Today";
import Stats from "./pages/Stats";
import * as dataHandling from "./functions/dataHandling";

function App() {
  const [options, setOptions] = useState([
    {
      name: "Notes",
      active: dataHandling.load("option-Notes") || false,
      type: "text",
    },
    {
      name: "Work",
      active: dataHandling.load("option-Work") || false,
      type: "check",
    },
    {
      name: "Exercise",
      active: dataHandling.load("option-Exercise") || false,
      type: "check",
    },
  ]);

  const [activePage, setActivePage] = useState(
    <Options options={options} setOptions={setOptions} />
  );

  const [activePageID, setActivePageID] = useState(1); // for setting CSS class

  return (
    <div>
      <h1>MoodMap</h1>

      <nav id="top-nav">
        <ul>
          <li
            className={activePageID === 1 ? "top-nav-underline" : ""}
            onClick={() => {
              setActivePage(
                <Options options={options} setOptions={setOptions} />
              );
              setActivePageID(1);
            }}
          >
            Options
          </li>
          <li
            className={activePageID === 2 ? "top-nav-underline" : ""}
            onClick={() => {
              setActivePage(<Today options={options} />);
              setActivePageID(2);
            }}
          >
            Today
          </li>
          <li
            className={activePageID === 3 ? "top-nav-underline" : ""}
            onClick={() => {
              setActivePage(<Stats />);
              setActivePageID(3);
            }}
          >
            Stats
          </li>
        </ul>
      </nav>

      {activePage}
    </div>
  );
}

export default App;

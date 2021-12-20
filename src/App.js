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

  return (
    <div>
      <h1>MoodMap</h1>

      <nav id="topNav">
        <ul>
          <li
            style={
              activePage.type.name === "Options"
                ? { borderBottom: "2.5px solid white" }
                : { border: "none" }
            }
            onClick={() => {
              setActivePage(
                <Options options={options} setOptions={setOptions} />
              );
            }}
          >
            Options
          </li>
          <li
            style={
              activePage.type.name === "Today"
                ? { borderBottom: "2.5px solid white" }
                : { border: "none" }
            }
            onClick={() => {
              setActivePage(<Today options={options} />);
            }}
          >
            Today
          </li>
          <li
            style={
              activePage.type.name === "Stats"
                ? { borderBottom: "2.5px solid white" }
                : { border: "none" }
            }
            onClick={() => {
              setActivePage(<Stats />);
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

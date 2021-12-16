import "./App.scss";
import { useState } from "react";
import Options from "./pages/Options";
import Today from "./pages/Today";
import Stats from "./pages/Stats";

function App() {
  const [options, setOptions] = useState([
    { name: "Notes", active: false, type: "text" },
    { name: "Work", active: false, type: "check" },
    { name: "Exercise", active: false, type: "check" },
  ]);

  const [activePage, setActivePage] = useState(
    <Options options={options} setOptions={setOptions} />
  );

  return (
    <div>
      <h1>MoodMap</h1>

      <nav id="topNav">
        <ul>
          <li>
            <button
              onClick={() => {
                setActivePage(
                  <Options options={options} setOptions={setOptions} />
                );
              }}
            >
              Options
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActivePage(<Today options={options} />);
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

import * as dateHandling from "../functions/dateHandling";
import * as dataHandling from "../functions/dataHandling";

const Stats = () => {
  let today = new Date();

  let lastMonth = dateHandling.getDaysInMonthUTC(
    today.getUTCMonth(),
    today.getUTCFullYear()
  );

  let trackedData = [];
  lastMonth.forEach((el) => {
    if (dataHandling.load("task-Mood-" + el) !== null)
      trackedData.push({
        date: el,
        value: String(dataHandling.load("task-Mood-" + el)),
      });
  });

  return (
    <main>
      <h2>Stats</h2>
      <p style={{ textDecoration: "underline" }}>Your mood this month:</p>
      <ul style={{ listStyle: "none", lineHeight: "2rem" }}>
        {trackedData.map((el, i) => (
          <li
            key={i}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div id="stats-li-left">
              {new Date(el.date).toLocaleDateString()}
            </div>
            <div id="stats-li-right">
              {el.value.charAt(0).toUpperCase() +
                el.value.slice(1).replace(/-/g, " ")}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Stats;

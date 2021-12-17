import "./Stats.scss";
import * as dateHandling from "../functions/dateHandling";
import * as dataHandling from "../functions/dataHandling";

const Stats = () => {
  let currentMonthDates = dateHandling.getDaysInCurrentMonth();
  let currentMonthData = [];

  currentMonthDates.forEach((el) => {
    if (
      dataHandling.load("task-Mood-" + dateHandling.convertToSaveFormat(el)) !==
      null
    ) {
      currentMonthData.push({
        date: el,
        mood: String(
          dataHandling.load("task-Mood-" + dateHandling.convertToSaveFormat(el))
        ),
        notes: String(
          dataHandling.load(
            "task-Notes-" + dateHandling.convertToSaveFormat(el)
          )
        ),
      });
    }
  });

  console.log(currentMonthData);

  let veryGoodDaysCurrentMonth = 0,
    veryGoodDaysCurrentMonthNotes = [],
    goodDaysCurrentMonth = 0,
    goodDaysCurrentMonthNotes = [],
    regularDaysCurrentMonth = 0,
    regularDaysCurrentMonthNotes = [],
    badDaysCurrentMonth = 0,
    badDaysCurrentMonthNotes = [],
    veryBadDaysCurrentMonth = 0,
    veryBadDaysCurrentMonthNotes = [];
  currentMonthData.forEach((el) => {
    if (el.mood === "very-good") {
      veryGoodDaysCurrentMonth++;
      if (el.notes !== "")
        veryGoodDaysCurrentMonthNotes.unshift(
          `🗒 ${el.date.toLocaleDateString()}: "${el.notes}"`
        );
    } else if (el.mood === "good") {
      goodDaysCurrentMonth++;
      if (el.notes !== "")
        goodDaysCurrentMonthNotes.unshift(
          `🗒 ${el.date.toLocaleDateString()}: "${el.notes}"`
        );
    } else if (el.mood === "indifferent") {
      regularDaysCurrentMonth++;
      if (el.notes !== "")
        regularDaysCurrentMonthNotes.unshift(
          `🗒 ${el.date.toLocaleDateString()}: "${el.notes}"`
        );
    } else if (el.mood === "bad") {
      badDaysCurrentMonth++;
      if (el.notes !== "")
        badDaysCurrentMonthNotes.unshift(
          `🗒 ${el.date.toLocaleDateString()}: "${el.notes}"`
        );
    } else if (el.mood === "very-bad") {
      veryBadDaysCurrentMonth++;
      if (el.notes !== "")
        veryBadDaysCurrentMonthNotes.unshift(
          `🗒 ${el.date.toLocaleDateString()}: "${el.notes}"`
        );
    }
  });

  let untrackedDaysMonth =
    currentMonthDates.length -
    (goodDaysCurrentMonth + regularDaysCurrentMonth + badDaysCurrentMonth);

  let currentMonthName = new Date().toLocaleString(undefined, {
    month: "long",
  });

  return (
    <main>
      <h2>Stats</h2>
      <h3>{currentMonthName}</h3>
      <div className="stats-container">
        <div className="stats-sub-container">
          <div className="stats-smiley">😁</div>
          <p>{veryGoodDaysCurrentMonth}</p>
          <div className="stats-info">
            Mood marked as "very good" on {veryGoodDaysCurrentMonth} days in
            this month.
            {veryGoodDaysCurrentMonthNotes.length > 0 ? (
              <ul>
                {veryGoodDaysCurrentMonthNotes.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">🙂</div>
          <p>{goodDaysCurrentMonth}</p>{" "}
          <div className="stats-info">
            Mood marked as "good" on {goodDaysCurrentMonth} days in this month.
            {goodDaysCurrentMonthNotes.length > 0 ? (
              <ul>
                {goodDaysCurrentMonthNotes.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">😐</div>
          <p>{regularDaysCurrentMonth}</p>{" "}
          <div className="stats-info">
            Mood marked as "indifferent" on {regularDaysCurrentMonth} days in
            this month.
            {regularDaysCurrentMonthNotes.length > 0 ? (
              <ul>
                {regularDaysCurrentMonthNotes.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">🙁</div>
          <p>{badDaysCurrentMonth}</p>{" "}
          <div className="stats-info">
            Mood marked as "bad" on {badDaysCurrentMonth} days in this month.
            {badDaysCurrentMonthNotes.length > 0 ? (
              <ul>
                {badDaysCurrentMonthNotes.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">😦</div>
          <p>{veryBadDaysCurrentMonth}</p>{" "}
          <div className="stats-info">
            Mood marked as "very bad" on {veryBadDaysCurrentMonth} days in this
            month.
            {veryBadDaysCurrentMonthNotes.length > 0 ? (
              <ul>
                {veryBadDaysCurrentMonthNotes.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">❌</div>
          <p>{untrackedDaysMonth}</p>
          <div className="stats-info">
            Mood not tracked on {untrackedDaysMonth} days in this month.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stats;

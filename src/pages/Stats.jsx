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

  let untrackedDaysCurrentMonth =
    currentMonthDates.length -
    (goodDaysCurrentMonth + regularDaysCurrentMonth + badDaysCurrentMonth);

  return (
    <main>
      <h2>Stats</h2>
      <h3>{dateHandling.currentMonth}</h3>
      <div className="stats-container">
        <div className="stats-sub-container">
          <div className="stats-smiley">😁</div>
          <p>{veryGoodDaysCurrentMonth}</p>
          <div className="stats-info">
            {veryGoodDaysCurrentMonth} very good days this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">🙂</div>
          <p>{goodDaysCurrentMonth}</p>
          <div className="stats-info">
            {goodDaysCurrentMonth} good days this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">😐</div>
          <p>{regularDaysCurrentMonth}</p>
          <div className="stats-info">
            {regularDaysCurrentMonth} regular days this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">🙁</div>
          <p>{badDaysCurrentMonth}</p>
          <div className="stats-info">
            {badDaysCurrentMonth} bad days this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">😦</div>
          <p>{veryBadDaysCurrentMonth}</p>
          <div className="stats-info">
            {veryBadDaysCurrentMonth} very bad days this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">❌</div>
          <p>{untrackedDaysCurrentMonth}</p>
          <div className="stats-info">
            {untrackedDaysCurrentMonth} untracked days this month.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stats;

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
        value: String(
          dataHandling.load("task-Mood-" + dateHandling.convertToSaveFormat(el))
        ),
      });
    }
  });

  let goodDaysCurrentMonth = 0;
  let regularDaysCurrentMonth = 0;
  let badDaysCurrentMonth = 0;
  currentMonthData.forEach((el) => {
    if (el.value === "good" || el.value === "very-good") goodDaysCurrentMonth++;
    else if (el.value === "indifferent") regularDaysCurrentMonth++;
    else if (el.value === "bad" || el.value === "very-bad")
      badDaysCurrentMonth++;
  });

  let untrackedDaysMonth =
    currentMonthDates.length -
    (goodDaysCurrentMonth + regularDaysCurrentMonth + badDaysCurrentMonth);

  return (
    <main>
      <h2>Stats</h2>
      <p>Good days this month: {goodDaysCurrentMonth}</p>
      <p>Regular days this month: {regularDaysCurrentMonth}</p>
      <p>Bad days this month: {badDaysCurrentMonth}</p>
      <p>Untracked days this month: {untrackedDaysMonth}</p>
    </main>
  );
};

export default Stats;

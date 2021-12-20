import * as dateHandling from "../functions/dateHandling";
import * as dataHandling from "../functions/dataHandling";

//==================== SAVING AND LOADING
export function save(key, string) {
  localStorage.setItem("MoodMapByTimSch-" + key, string);
}

export function load(key) {
  let loadedData = localStorage.getItem("MoodMapByTimSch-" + key);
  // filtering out and converting boolean values for checkbox type options / tasks
  if (loadedData === "true") return true;
  else if (loadedData === "false") return false;
  else return loadedData;
}

//==================== STATS DATA

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
        dataHandling.load("task-Notes-" + dateHandling.convertToSaveFormat(el))
      ),
    });
  }
});

export let veryGoodDaysCurrentMonth = 0,
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

export let untrackedDaysCurrentMonth =
  currentMonthDates.length -
  (goodDaysCurrentMonth + regularDaysCurrentMonth + badDaysCurrentMonth);

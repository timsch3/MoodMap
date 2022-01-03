import * as dateHandling from "../functions/dateHandling";

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

//==================== STORING DATA FOR DISPLAYING IN STATS

// Array format: [untracked days, very good days, good days, regular days, bad days, very bad days, [date, mood, notes], ...]
//                                                                      (sub-array for each tracked day starting at [6])
export function getDataForMonth(YY, MM) {
  const daysInCurrentMonth = dateHandling.getDaysInMonth(YY, MM);
  console.log("days curr month: ", daysInCurrentMonth);
  let data = [];
  // load all saved data
  daysInCurrentMonth.forEach((el) => {
    if (load("task-Mood-" + dateHandling.convertToSaveFormat(el)) !== null) {
      data.push([
        Date(el),
        String(load("task-Mood-" + dateHandling.convertToSaveFormat(el))),
        String(load("task-Notes-" + dateHandling.convertToSaveFormat(el))),
      ]);
    }
  });
  // store mood for all tracked days
  data.forEach((el) => {
    if (el[1] === "very-good") data[1]++;
    else if (el[1] === "good") data[2]++;
    else if (el[1] === "indifferent") data[3]++;
    else if (el[1] === "bad") data[4]++;
    else if (el[1] === "very-bad") data[5]++;
  });
  // calculate untracked days
  data.unshift(daysInCurrentMonth - (data.length - 1));
  return data;
}

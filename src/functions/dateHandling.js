let today = new Date();

export let currentMonth = today.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});

export function convertToSaveFormat(date) {
  return date.toDateString().replace(/\s/g, "-");
}

export function getCurrentDate(UTC) {
  // UTC format for saving unique strings while keeping local dates correct
  let todayUTC = new Date(today.toUTCString());
  return UTC === true
    ? convertToSaveFormat(todayUTC)
    : todayUTC.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
}

export function getDaysInCurrentMonth() {
  var today = new Date();
  var date = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1));
  var days = [];
  while (date.getUTCMonth() === today.getUTCMonth()) {
    days.push(new Date(date));
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return days;
}

export function getCurrentDate(UTC) {
  let today = new Date();
  // UTC format for saving unique strings while keeping local dates correct
  let todayUTC = new Date(today.toUTCString());
  return UTC === true
    ? todayUTC.toDateString().replace(/\s/g, "-")
    : todayUTC.toLocaleDateString();
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

export function convertToSaveFormat(date) {
  return date.toDateString().replace(/\s/g, "-");
}

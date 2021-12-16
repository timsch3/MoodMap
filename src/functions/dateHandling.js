export function getCurrentDate(UTC) {
  let today = new Date();
  // UTC format for saving unique strings while keeping local dates correct
  let todayUTC = new Date(today.toUTCString());
  return UTC === true
    ? todayUTC.toDateString().replace(/\s/g, "-")
    : todayUTC.toLocaleDateString();
}

export function getDaysInMonthUTC(month, year) {
  var date = new Date(Date.UTC(year, month, 1));
  var days = [];
  while (date.getUTCMonth() === month) {
    days.push(new Date(date).toDateString().replace(/\s/g, "-"));
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return days;
}

export function getCurrentDate(UTC) {
  let today = new Date("1.1.2021");
  // UTC format for saving unique strings while keeping local dates correct
  let todayUTC = new Date(today.toUTCString());
  return UTC === true ? todayUTC.toDateString() : todayUTC.toLocaleDateString();
}

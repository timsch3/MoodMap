export function getCurrentDate(UTC) {
  let today = new Date();
  // UTC format for saving unique strings while keeping local dates correct
  let todayUTC = new Date(today.toUTCString());
  return UTC === true
    ? todayUTC.toDateString().replace(/\s/g, "-")
    : todayUTC.toLocaleDateString().replace(/\s/g, "-");
}

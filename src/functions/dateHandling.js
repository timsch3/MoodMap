export const today = new Date();

export const currentMonthString = today.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});

export function convertToSaveFormat(date) {
  return date.toDateString().replace(/\s/g, "-");
}

export function getCurrentDate(UTC) {
  // UTC format for saving unique strings while keeping local dates correct
  const todayUTC = new Date(today.toUTCString());
  return UTC === true
    ? convertToSaveFormat(todayUTC)
    : todayUTC.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
}

export function getDaysInMonth(YY, MM) {
  const propsDate = new Date(`${YY}-${MM}-01T00:00:00.000Z`);
  const date = new Date(
    Date.UTC(propsDate.getUTCFullYear(), propsDate.getUTCMonth())
  );
  let days = [];
  while (date.getUTCMonth() === propsDate.getUTCMonth()) {
    days.push(new Date(date));
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return days;
}

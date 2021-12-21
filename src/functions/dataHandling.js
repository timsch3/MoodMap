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

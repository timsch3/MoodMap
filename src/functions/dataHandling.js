export function save(key, string) {
  localStorage.setItem("MoodMapByTimsch-" + key, string);
}

export function load(key) {
  let loadedData = localStorage.getItem("MoodMapByTimsch-" + key);
  // filtering out and converting boolean values for checkbox type options / tasks
  if (loadedData === "true") return true;
  else if (loadedData === "false") return false;
  else return loadedData;
}

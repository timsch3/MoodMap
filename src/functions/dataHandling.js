export function save(key, string) {
  localStorage.setItem(key, string);
}

export function load(key) {
  let loadedData = localStorage.getItem(key);
  console.log(loadedData);
  // filtering out and converting boolean values for checkbox type options / tasks
  if (loadedData === "true") return true;
  else if (loadedData === "false") return false;
  else return loadedData;
}

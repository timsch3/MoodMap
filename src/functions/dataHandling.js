export function saveLocal(key, string) {
  localStorage.setItem(key, string);
}

export function loadLocal(key) {
  let loadedData = localStorage.getItem(key);
  if (loadedData === "true") return true;
  else if (loadedData === "false") return false;
  else return loadedData;
}

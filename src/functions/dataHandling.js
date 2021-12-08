export function saveLocal(key, string) {
  return localStorage.setItem(key, string);
}

export function loadLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

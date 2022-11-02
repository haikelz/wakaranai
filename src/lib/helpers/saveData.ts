export function saveData<T>(newData: T) {
  localStorage.setItem("result", JSON.stringify(newData));
}

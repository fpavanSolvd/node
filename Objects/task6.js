// Task 6

function deepCloneObject(obj, visited = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (visited.has(obj)) {
    return visited.get(obj);
  }

  let clone = Array.isArray(obj) ? [] : {};

  visited.set(obj, clone);

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepCloneObject(obj[key], visited);
    }
  }

  return clone;
}

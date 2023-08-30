// Task 4

function createImmutableObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(createImmutableObject);
  }

  const immutableObj = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    immutableObj[key] = createImmutableObject(value);
  });

  Object.keys(immutableObj).forEach((key) => {
    Object.defineProperty(immutableObj, key, {
      value: immutableObj[key],
      writable: false,
      configurable: false,
    });
  });

  return immutableObj;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

const immutablePerson = createImmutableObject(person);
console.log(immutablePerson === person); // false

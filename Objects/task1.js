// Task 1

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

Object.defineProperties(person, {
  firstName: { writable: false },
  lastName: { writable: false },
  age: { writable: false },
  email: { writable: false },
});

person.updateInfo = function (newInfo) {
  if (typeof newInfo !== "object" || newInfo === null) {
    throw new Error("Input must be an object");
  }

  for (const property in newInfo) {
    if (
      this.hasOwnProperty(property) &&
      !Object.getOwnPropertyDescriptor(this, property).writable
    ) {
      throw new Error(
        `Property ${property} is read-only and cannot be modified`
      );
    }
  }

  for (const property in newInfo) {
    console.log(property);
    this[property] = newInfo[property];
  }
};

Object.defineProperty(person, "address", {
  value: {},
  writable: true,
  enumerable: false,
  configurable: false,
});

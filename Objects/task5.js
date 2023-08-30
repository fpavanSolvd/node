function observeObject(obj, callback) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      callback("get", prop, value);
      return value;
    },
    set(target, prop, value, receiver) {
      const result = Reflect.set(target, prop, value, receiver);
      callback("set", prop, value);
      return result;
    },
  });
}

// Example usage:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

const logActionAndProperty = (...args) => {
  console.log(
    `Callback: Action ${args[0]} was performed on property ${args[1]}.`
  );
};

const observedPerson = observeObject(person, logActionAndProperty);
observedPerson.age = 20;

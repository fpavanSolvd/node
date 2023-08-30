Hi Alexandrina! Here's my homework from Monday.

Task1:

```javascript
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
```

Task 2:

```javascript
const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

Object.defineProperties(product, {
  price: {
    enumerable: false,
    writable: false,
  },
  quantity: {
    enumerable: false,
    writable: false,
  },
});

const getTotalPrice = function (product) {
  const quantityDescriptor = Object.getOwnPropertyDescriptor(
    product,
    "quantity"
  );
  const priceDescriptor = Object.getOwnPropertyDescriptor(product, "price");

  const quantity = quantityDescriptor.value;
  const price = priceDescriptor.value;

  return quantity * price;
};

const deleteNonConfigurable = function (object, property) {
  const propertyDescriptor = Object.getOwnPropertyDescriptor(object, property);
  if (!propertyDescriptor.configurable) {
    throw new Error("Can't delete non-configurable properties");
  }

  delete object[property];
};
```

Task 3:

```javascript
const bankAccount = {
  _balance: 1000,

  get formattedBalance() {
    return `$${this._balance}`;
  },

  set balance(value) {
    if (typeof value !== "number") {
      throw new Error("New balance must be a number");
    }
    this._balance = value;
  },
};

bankAccount.transfer = function (targetAccount, amount) {
  if (amount > this._balance) {
    throw new Error("Cannot transfer an amount greater than current balance.");
  }

  this._balance -= amount;
  targetAccount._balance += amount;
};
```

Task 4:

```javascript
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
```

Task 5:

```javascript
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
```

Task 6:

```javascript
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
```

Task 7:

```javascript
function validateObject(obj, schema) {
  for (const property in schema) {
    if (schema[property].required && !(property in obj)) {
      return false;
    }
  }

  for (const property in obj) {
    if (property in schema) {
      const value = obj[property];
      const rule = schema[property];

      if (rule.type && typeof value !== rule.type) {
        return false;
      }

      if (rule.validate && !rule.validate(value)) {
        return false;
      }
    }
  }

  return true;
}

const personSchema = {
  firstName: { required: true, type: "string" },
  lastName: { required: true, type: "string" },
  age: { type: "number" },
  email: {
    type: "string",
    validate: (value) => /\S+@\S+\.\S+/.test(value),
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

const person2 = {
  firstName: "Jane",
  age: 25,
  email: "invalid-email",
};

console.log(validateObject(person1, personSchema));
console.log(validateObject(person2, personSchema));
```

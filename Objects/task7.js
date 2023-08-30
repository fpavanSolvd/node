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
    validate: (value) => /\S+@\S+\.\S+/.test(value), // Validate email format
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

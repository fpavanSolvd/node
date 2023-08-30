function customTag(strings, ...values) {
  let result = "";
  console.log(strings);
  console.log(values);
  for (let i = 0; i < strings.length; i++) {
    
    result += strings[i];
    if (values[i]) {
      
      result += values[i].toUpperCase();
    }
  }
  return result;
}

const name = "Alice";
const age = "30";
const message = customTag`Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
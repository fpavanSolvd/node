// 1
// 1
const calculateFactorial = (number, accumulator = 1) => {
    if (number === 0) {
      return accumulator;
    }
  
    return calculateFactorial(number - 1, number * accumulator);
};

// 2
const power = (base, exponent, accumulator = 1) => {
    if (exponent === 0) {
      return accumulator;
    }
  
    return power(base, exponent - 1, base * accumulator);
  };

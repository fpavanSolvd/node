// Task 1
//1
function calculateDiscountedPrice(products, discountPercentage) {
    const discountedProducts = [];
  
    for (const { name, price } of products) {
      const discountedPrice = price * (1 - discountPercentage / 100);
      discountedProducts.push({ name, price: discountedPrice });
    }
  
    return discountedProducts;
}
 
// 2
function calculateTotalPrice(products) {
    let total = 0;
  
    for (const product of products) {
      total += product.price;
    }
  
    return total;
}

// Task 2
// 1
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

// 2
const toLowerCase = (text) => text.toLowerCase();
const splitWords = (text) => text.split(' ');
const filterUnique = (arr) => arr.filter((word, index, arr) => arr.indexOf(word) === index);

const filterUniqueWords = (text) =>
  filterUnique(splitWords(toLowerCase(text)));

// 3
const getGrade = ({name, grade}) => grade;
const sumGrades = (students) => students.reduce((acc, student) => acc + getGrade(student), 0);
const getTotalNumberOfStudents = (students) => students.length;
const calculateAverageGrade = (totalGrades, totalStudents) => totalGrades / totalStudents;
  
const getAverageGrade = (students) =>
    calculateAverageGrade(sumGrades(students), getTotalNumberOfStudents(students));

// Task 3
// 1
const createCounter = () => {
    let count = 0;
  
    const counter = () => {
      count++;
      return count;
    };
  
    return counter;
};

// 2
const repeatFunction = (func, num) => {
    if (num >= 0 ) {
        return () => {
            for (let i = 0; i < num; i++) {
                func();
            } 
        }
    } else {
        throw new Error("Can't run a negative amount of times");
    }
}

// Task 4
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

// Task 5
// 1
function* lazyMap(array, mappingFunction) {
    for (const item of array) {
      yield mappingFunction(item);
    }
}

// 2
function* fibonacciGenerator() {
    let current = 0;
    let next = 1;
  
    while (true) {
      yield current;
      [current, next] = [next, current + next];
    }
  }


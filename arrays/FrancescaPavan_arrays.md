# Task 1
```javascript
function customFilterUnique(array, callback) {
    const uniqueArray = [];
    const seenElements = new Set();
  
    for (const item of array) {
      if (callback(item)) {
        const key = JSON.stringify(item);
        if (!seenElements.has(key)) {
          seenElements.add(key);
          uniqueArray.push(item);
        }
      }
    }
  
    return uniqueArray;
}

const greater3 = (value) => value > 3;
const a = [1,2,3,3,4,5,6];
console.log(customFilterUnique(a, greater3));
```

---
# Task 2
```javascript
const chunkArray = function (array, chunkSize) {
    const result = [];
    let chunkedLimit = 0;

    while (chunkedLimit < array.length) {
        const chunk = array.slice(chunkedLimit, chunkedLimit + chunkSize);
        result.push(chunk);
        chunkedLimit += chunkSize
    }

    return result;
}


const optimizedChunkArray = function (array, chunkSize) {
    const result = [];
    let chunkedLimit = 0;

    while (chunkedLimit < array.length) {
        result.push(array.slice(chunkedLimit, chunkedLimit + chunkSize));
        chunkedLimit += chunkSize
    }

    return result;
}
```

---
# Task 3
```javascript
const customShuffle = function (array) { 
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value); 
}; 


// using Fisher-Yates Algorithm
const customShuffle2= function (array) {
    const shuffledArray = [...array];
    let currentIndex = shuffledArray.length;
  
    while (currentIndex !== 0) {
     
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      const temp = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temp;
    }
  
    return shuffledArray;
  }
```

---
# Task 4
```javascript
const getArrayIntersection = function (array1, array2) {
    return array1.filter(element => array2.includes(element));
}

const getArrayUnion = function (array1, array2) {
    const result = new Set(array1.concat(array2));
    return [...result];
}
```

---
# Task 5
```javascript
const measureArrayPerformance = function (func, array) {
    const startTime = Date.now();
    const result = func(array);
    const endTime = Date.now();
    const executionTime = (endTime - startTime) / 1000; 
    return [result, executionTime];
}

const customMap = function (arr, callback) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
      mappedArray.push(callback(arr[i], i, arr));
    }
    return mappedArray;
}
const arrayToManipulate = Array(1000000).fill(1);
console.log(measureArrayPerformance(
    (arr) => arr.map((element) => element * 2),
    arrayToManipulate
  )[1]);

console.log(measureArrayPerformance(
    (arr) => customMap(arr, (element) => element * 2),
    arrayToManipulate
  )[1]);
  ```
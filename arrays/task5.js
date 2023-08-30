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
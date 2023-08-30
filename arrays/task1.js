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


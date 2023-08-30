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
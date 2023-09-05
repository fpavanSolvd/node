function promiseAllSettled(promises) {
  const settledPromises = [];
  
  function settlePromise(promise, index) {
    promise
      .then((value) => {
        settledPromises[index] = { status: 'fulfilled', value };
      })
      .catch((reason) => {
        settledPromises[index] = { status: 'rejected', reason };
      })
      .finally(() => {
        // Check if all promises have settled
        if (settledPromises.length === promises.length) {
          return settledPromises;
        }
      });
  }
  
  for (let i = 0; i < promises.length; i++) {
    settlePromise(promises[i], i);
  }

  return new Promise((resolve) => {
    const checkAllPromisesSettled = () => {
      if (settledPromises.length === promises.length) {
        resolve(settledPromises);
      } else {
        setTimeout(checkAllPromisesSettled, 0);
      }
    };
    
    checkAllPromisesSettled();
  });
}

// Example usage:
const promises = [
  Promise.resolve(1),
  Promise.reject("Error occurred"),
  Promise.resolve(3),
];

promiseAllSettled(promises)
  .then((results) => {
    console.log("All promises settled:", results);
    // Expected: [{ status: 'fulfilled', value: 1 },
    //            { status: 'rejected', reason: 'Error occurred' },
    //            { status: 'fulfilled', value: 3 }]
  });

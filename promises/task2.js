function promiseAllSettled(promises) {
  const settledPromises = [];
  let settledCount = 0;

  return new Promise((resolve) => {
    if (promises.length === 0) {
      resolve(settledPromises);
      return;
    }

    function settlePromise(promise, index) {
      promise
        .then((value) => {
          settledPromises[index] = { status: 'fulfilled', value };
          settledCount++;

          if (settledCount === promises.length) {
            resolve(settledPromises);
          }
        })
        .catch((reason) => {
          settledPromises[index] = { status: 'rejected', reason };
          settledCount++;

          if (settledCount === promises.length) {
            resolve(settledPromises);
          }
        });
    }

    for (let i = 0; i < promises.length; i++) {
      settlePromise(promises[i], i);
    }
  });
}

// Example usage:
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Resolved after 100ms');
  }, 100);
});
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject('Rejected after 50ms');
  }, 50);
});
const promises = [promise1, promise2];
promiseAllSettled(promises).then((results) => {
  console.log(results);
});

function promiseAllSettled(promises) {
    return Promise.all(promises.map((promise) => {
      return promise
        .then((value) => ({ status: 'fulfilled', value }))
        .catch((reason) => ({ status: 'rejected', reason }));
    }));
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
  
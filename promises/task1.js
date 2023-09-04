function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      const results = [];
      let completedCount = 0;
  
      if (promises.length === 0) {
        resolve(results);
        return;
      }
  
      promises.forEach((promise, index) => {
        promise
          .then((result) => {
            results[index] = result;
            completedCount++;
  
            if (completedCount === promises.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  }
  
  // Example usage:
  const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ];
  
  promiseAll(promises)
    .then((results) => {
      console.log("All promises resolved:", results); // Expected: [1, 2, 3]
    })
    .catch((error) => {
      console.error("At least one promise rejected:", error);
    });
  
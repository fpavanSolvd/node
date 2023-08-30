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

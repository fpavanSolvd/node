function curry(func, arity) {
    return function curried(...args) {
        if (args.length >= arity) {
            return func(...args);
        } else {
            return function (...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}

function multiply(a, b, c,d) {
    return a * b * c + d;
}

const curriedMultiply = curry(multiply, 4);

const step1 = curriedMultiply(2);
const step2 = step1(3);
const step3 = step2(4);
const result = step3(1);

console.log("Result:", result); // Expected: 24
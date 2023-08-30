const nodeplotlib = require('nodeplotlib');

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];

    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function generateSortedArray(length) {
    const arr = [];
    for (let i = 1; i <= length; i++) {
        arr.push(i);
    }
    return arr;
}

function generateSortedBackwardArray(length) {
    const arr = [];
    for (let i = length; i >= 1; i--) {
        arr.push(i);
    }
    return arr;
}

function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.random());
    }
    return arr;
}

function measureExecutionTime(func) {
    const startTime = performance.now();
    func();
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    return executionTime;
}

function generateArrayTypeArray(type, length) {
    if (type === 'Sorted') {
        return generateSortedArray(length);
    } else if (type === 'Sorted Backward') {
        return generateSortedBackwardArray(length);
    } else if (type === 'Random') {
        return generateRandomArray(length);
    } else {
        throw new Error('Invalid array type');
    }
}

const sortingAlgorithms = {
    bubbleSort,
    quickSort,
    mergeSort,
};

const arrayLengths = [2, 5, 10, 50, 100, 1000, 10000]; // You can add more lengths
const arrayTypes = ['Sorted', 'Sorted Backward', 'Random'];

const resultsByArrayType = {};

for (const arrayType of arrayTypes) {
    resultsByArrayType[arrayType] = [];

    for (const length of arrayLengths) {
        const row = { Length: length };

        for (const algorithmName in sortingAlgorithms) {
            const algorithm = sortingAlgorithms[algorithmName];
            const array = generateArrayTypeArray(arrayType, length);

            const executionTime = measureExecutionTime(() => algorithm(array.slice()));
            row[algorithmName] = executionTime.toFixed(4);
        }

        resultsByArrayType[arrayType].push(row);
    }
}

for (const arrayType in resultsByArrayType) {
    console.log(`Results for ${arrayType} Arrays:`);
    console.table(resultsByArrayType[arrayType]);
    console.log('\n');
}







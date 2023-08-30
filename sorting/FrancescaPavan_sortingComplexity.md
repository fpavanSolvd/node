# Comparison of Computational Complexity of BubbleSort, QuickSort and MergeSort Algorithms

&nbsp;
## BubbleSort 

```javascript
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
```
&nbsp;
## QuickSort
```javascript
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
```
&nbsp;
## MergeSort
```javascript
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
```
&nbsp;

---

To determine the length at which MergeSort and QuickSort become consistently faster then BubbleSort I created a few helper functions that create different types of arrays of a given length:

```javascript
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
```

I then used the function similar to the one created in the Arrays homework to measure the excecution time of a function:

```javascript 
function measureExecutionTime(func) {
    const startTime = performance.now();
    func();
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    return executionTime;
}
```

Using a for loop I generated one array of each type and passed it through each of the sorting algorithms, measuring and registering each execution time.

Using `console.table` I created tables to output the results:


### Results for Sorted Arrays:

| Length | bubbleSort | quickSort | mergeSort |
|--------|------------|-----------|-----------|
|   2    |  '0.0850'  | '0.1042'  | '0.1199'  |
|   5    |  '0.0034'  | '0.0296'  | '0.0108'  |
|   10   |  '0.0085'  | '0.0324'  | '0.2306'  |
|   50   |  '0.0549'  | '0.0447'  | '0.0778'  |
|  100   |  '0.1912'  | '0.0890'  | '0.1113'  |
|  1000  |  '4.2258'  | '1.5134'  | '1.6798'  |
| 10000  | '115.4391' | '6.7662'  | '10.7546' |

In this case we can se that for array lengths smaller that 50 BubbleSort outperforms the other sorting algorithms, but after that it performs exponentially worse.


### Results for Sorted Backward Arrays:

|Length |bubbleSort |quickSort |mergeSort |
|-------|-----------|----------|----------|
|   2    |  '0.0824'  | '0.0023'  | '0.0388'  |
|   5    |  '0.0027'  | '0.0016'  | '0.0379'  |
|   10   |  '0.0045'  | '0.0020'  | '0.0098'  |
|   50   |  '0.0912'  | '0.0067'  | '0.0491'  |
|  100   |  '1.4432'  | '0.0157'  | '0.1109'  |
|  1000  |  '2.0235'  | '0.1720'  | '1.4711'  |
| 10000  | '119.1160' | '3.7100'  | '8.1277'  |

In this case Bubblesort has the worst performance from the start, which is logical, given that if our objective is to sort ascending, having a descending array is the worst case scenario for Bubblesort.


### Results for Random Arrays:
| Length | bubbleSort | quickSort | mergeSort |
|--------|------------|-----------|-----------|
|   2    |  '0.1376'  | '0.0504'  | '0.0780'  |
|   5    |  '0.0144'  | '0.0081'  | '0.0081'  |
|   10   |  '0.0036'  | '0.0045'  | '0.0083'  |
|   50   |  '0.0691'  | '0.0340'  | '0.0484'  |
|  100   |  '1.7209'  | '0.0737'  | '0.0981'  |
|  1000  |  '1.7872'  | '1.5106'  | '1.9413'  |
| 10000  | '176.8906' | '4.2170'  | '7.5172'  |

In this last case we see that Bubblesort begins to perform worse when array lengths are greater than 100.
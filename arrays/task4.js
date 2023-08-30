const getArrayIntersection = function (array1, array2) {
    return array1.filter(element => array2.includes(element));
}

const getArrayUnion = function (array1, array2) {
    const result = new Set(array1.concat(array2));
    return [...result];
}

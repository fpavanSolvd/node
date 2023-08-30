const chunkArray = function (array, chunkSize) {
    const result = [];
    let chunkedLimit = 0;

    while (chunkedLimit < array.length) {
        const chunk = array.slice(chunkedLimit, chunkedLimit + chunkSize);
        result.push(chunk);
        chunkedLimit += chunkSize
    }

    return result;
}


const optimizedChunkArray = function (array, chunkSize) {
    const result = [];
    let chunkedLimit = 0;

    while (chunkedLimit < array.length) {
        result.push(array.slice(chunkedLimit, chunkedLimit + chunkSize));
        chunkedLimit += chunkSize
    }

    return result;
}

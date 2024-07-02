function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}
function flatMap(array, callback) {
    return array.reduce(
        (acc, val, i, arr) => acc.concat(callback(val, i, arr)),
        []
    );
}
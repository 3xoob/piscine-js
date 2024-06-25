function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join(',');
}

function setToArr(set) {
    return Array.from(set);
}

function setToStr(set) {
    return Array.from(set).join(',');
}

function strToArr(str) {
    return str.split(',');
}

function strToSet(str) {
    return new Set(str.split(','));
}

function mapToObj(map) {
    const obj = {};
    for (let [key, value] of map) {
        obj[key] = value;
    }
    return obj;
}

function objToArr(obj) {
    return Object.entries(obj);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function arrToObj(arr) {
    const obj = {};
    arr.forEach((value, index) => {
        obj[index] = value;
    });
    return obj;
}

function strToObj(str) {
    const obj = {};
    str.split(',').forEach((value, index) => {
        obj[index] = value;
    });
    return obj;
}

function superTypeOf(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    if (value instanceof Set) return 'set';
    if (value instanceof Map) return 'map';
    if (value instanceof Date) return 'date';
    if (value instanceof RegExp) return 'regexp';
    return typeof value;
}

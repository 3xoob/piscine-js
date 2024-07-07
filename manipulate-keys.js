function filterKeys(obj, callback) {
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && callback(key)) {
        result[key] = obj[key];
      }
    }
    return result;
}

function mapKeys(obj, callback) {
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = callback(key);
        result[newKey] = obj[key];
      }
    }
    return result;
}  
function reduceKeys(obj, callback, initialValue) {
    let accumulator = initialValue;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        accumulator = callback(accumulator, key);
      }
    }
    return accumulator;
}

function pick(obj, keys) {
    const result = {};
    if (typeof keys === 'string') {
      keys = [keys];
    }
    keys.forEach(key => {
      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key];
      }
    });
    return result;
}
function omit(obj, keys) {
    const result = {};
    if (typeof keys === 'string') {
      keys = [keys];
    }
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && !keys.includes(key)) {
        result[key] = obj[key];
      }
    }
    return result;
}

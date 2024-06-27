function get(src, path) {
    const keys = path.split('.');
    let result = src;
    for (let key of keys) {
        if (result && result.hasOwnProperty(key)) {
            result = result[key];
        } else {
            return undefined;
        }
    }
    return result;
}
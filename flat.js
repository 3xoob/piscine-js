function flat(array, depth) {
    if (!Array.isArray(array)) {
        return array;
    }
    if (depth === 0) {
        return array;
    }
    if (depth === undefined) {
        depth = 1;
    }
    return array.reduce((acc, cur) => {
        return acc.concat(flat(cur, depth - 1));
    }, []);
}
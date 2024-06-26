function indexOf(array, value , start=0) {
    for (let i = start; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}
function lastIndexOf(array, value, start= array.length - 1) {
    for (let i = start ; i >= 0; i--) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}
function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
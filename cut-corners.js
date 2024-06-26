function round(x) {
    let sign = x >= 0 ? 1 : -1;
    let absX = sign * x;
    let integerPart = absX | 0;
    if (absX - integerPart >= 0.5) {
        return sign * (integerPart + 1);
    } else {
        return sign * integerPart;
    }
}
function ceil(x) {
    let integerPart = x | 0;
    if (x > 0 && x !== integerPart) {
        integerPart++;
    }
    return integerPart;
}
function floor(x) {
    let integerPart = x | 0;
    return integerPart;
}
function trunc(x) {
    if (x >= 0) {
        return x | 0;
    } else {
        return -(-x | 0);
    }
}
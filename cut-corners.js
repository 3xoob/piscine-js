function round(x) {
    let sign = x >= 0 ? 1 : -1;
    let absX = sign * x;
    let intP = absX | 0;
    if (absX - intP >= 0.5) {
        return sign * (intP + 1);
    } else {
        return sign * intP;
    }
}
function ceil(x) {
    let intP = x | 0;
    if (x > 0 && x !== intP) {
        intP++;
    }
    return intP;
}
function floor(x) {
    let intP = x | 0;
    return intP;
}
function trunc(x) {
    if (x >= 0) {
        return x | 0;
    } else {
        return -(-x | 0);
    }
}
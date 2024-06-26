function multiply(a, b) {
    let result = 0;
    let isNegative = false;
    if (a < 0) {
        a = -a;
        isNegative = !isNegative;
    }
    if (b < 0) {
        b = -b;
        isNegative = !isNegative;
    }
    for (let i = 0; i < b; i++) {
        result += a;
    }
    if (isNegative) {
        result = -result;
    }
    return result;
}
function divide(a, b) {
    let result = 0;
    let isNegative = false;
    if (a < 0) {
        a = -a;
        isNegative = !isNegative;
    }
    if (b < 0) {
        b = -b;
        isNegative = !isNegative;
    }
    while (a >= b) {
        a -= b;
        result++;
    }
    if (isNegative) {
        result = -result;
    }
    return result;
}
function modulo(a, b) {
    let isNegative = false;
    if (a < 0) {
        a = -a;
        isNegative = !isNegative;
    }
    if (b < 0) {
        b = -b;
    }
    while (a >= b) {
        a -= b;
    }
    if (isNegative) {
        a = -a;
    }
    return a;
}


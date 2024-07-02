function adder(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
function sumOrMul(numbers, initialValue = 0) {
    return numbers.reduce((acc, num) => {
        return num % 2 === 0 ? acc * num : acc + num;
    }, initialValue);
}
function funcExec(functions, initialValue) {
    return functions.reduce((acc, fn) => fn(acc), initialValue);
}

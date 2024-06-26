function slice(input, start, end) {
    if (start < 0) {
        start = input.length + start;
    }
    if (end !== undefined && end < 0) {
        end = input.length + end;
    }
    if (end === undefined || end > input.length) {
        end = input.length;
    }
    let result = typeof input === 'string' ? '' : [];
    for (let i = start; i < end; i++) {
        if (typeof input === 'string') {
            result += input[i];
        } else {
            result.push(input[i]);
        }
    }
    return result;
}
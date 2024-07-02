function flow(funcs) {
    return function(...args) {
        let result = args;
        for (let i = 0; i < funcs.length; i++) {
            result = [funcs[i].apply(null, result)];
        }
        return result[0];
    };
}

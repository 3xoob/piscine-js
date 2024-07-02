function currify(func) {
    function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    }
    return curried;
}

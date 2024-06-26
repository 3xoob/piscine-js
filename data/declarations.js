const escapeStr = '`, \\, /, " and \'';
const arr = Object.freeze([4, '2']);
const obj = Object.freeze({
    str: 'Ali',
    num: 16,
    bool: true,
    undef: undefined
});
const nested = Object.freeze({
    arr: Object.freeze([4, undefined, '2']),
    obj: Object.freeze({
        str: 'hello',
        num: 3.3333,
        bool: false
    })
});

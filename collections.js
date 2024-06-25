const arrToSet = (arr) => {
    let set = new Set
    for(let i = 0;i<arr.length;i++){
        set.add(arr[i])
    }
    return set
}
const arrToStr = (arr) => {
    let str = ''
    for(let i = 0;i<arr.length;i++){
        str += arr[i]
    }
    return str
}
const setToArr = (set) => {
    let arr = Array.from(set)
    return arr
}
const setToStr = (set) => {
    let str = ''
    for (let item of set.values()) str += item;
    return str
}
const strToArr = (str) => {
    let arr = Array.from(str)
    return arr
}
const strToSet = (str) => {
    let set = new Set
    for(let i = 0;i<str.length;i++){
        set.add(str[i])
    }
    return set
}
const mapToObj = (map) => {
    let obj = {}
    for (var [key, value] of map.entries()) {
        obj[key] = value
      }
    return obj
}
const objToArr = (obj) => {
    let arr = []
    for (const [key, value] of Object.entries(obj)) {
        arr.push(value)
      }
    return arr
}
const objToMap = (obj) => {
    let map = new Map
    for (let key in obj) {
        map.set(key, obj[key])
      }
    return map
} 
const arrToObj = (arr) => {
    let obj = {}
    for(let i = 0;i<arr.length;i++){
        obj[i] = arr[i]
    }
    return obj
}
const strToObj = (str) => {
    let obj = {}
    for(let i = 0;i<str.length;i++){
        obj[i] = str[i]
    }
    return obj
}

const superTypeOf = (value) => {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    if (value instanceof Set) return 'set';
    if (value instanceof Map) return 'map';
    if (value instanceof Date) return 'date';
    if (value instanceof RegExp) return 'regexp';
    return typeof value;
}

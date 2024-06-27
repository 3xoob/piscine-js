function join(array, sepliter) {
    if (sepliter === null) {
        sepliter = ",";
    }
    var result = array[0].toString();
    for (var i = 1; i < array.length; i++) {
        result += sepliter + array[i];
    }
    return result;
}
function split(str, sepliter) {
    if (sepliter === null) {
        sepliter = ",";
    }
    var result = [];
    if (sepliter === "") {
        for (var i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }
    var end = str.indexOf(sepliter);
    while (end > -1) {
        end = str.indexOf(sepliter);
        if (end === -1) {
            break;
        }
        result.push(str.slice(0, end));
        str = str.slice(end + sepliter.length);
    }
    result.push(str);
    return result;
}
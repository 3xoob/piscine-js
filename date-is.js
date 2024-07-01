function isValid(date) {
    return date instanceof Date && !isNaN(date.getTime());
}

function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 > date2;
}

function isBefore(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 < date2;
}

function isFuture(date) {
    if (!isValid(date)) {
        return false;
    }
    if (new Date(date).getTime() > Date.now()) {
        return true;
    }
    return false;
}

function isPast(date) {
    if (!isValid(date)) {
        return false;
    }
    if (new Date(date).getTime() < Date.now()) {
        return true;
    }
    return false;
}
function isValid(date) {
    if (isNaN(date) || date == 0) {
        return false
    } else {
        return true
    }
}

function isAfter(d1, d2) {
    if (d1 > d2) {
        return true;
    }
    return false;
}

function isBefore(d1, d2) {
    if (d1 < d2) {
        return true;
    }
    return false;
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
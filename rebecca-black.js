function isFriday(date) {
    return date.getDay() === 5;
}

function isWeekend(date) {
    let day = date.getDay();
    return day === 0 || day === 6;
}

function isLeapYear(date) {
    let year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function isLastDayOfMonth(date) {
    let nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay.getMonth() !== date.getMonth();
}
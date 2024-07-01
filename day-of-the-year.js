function dayOfTheYear(date) {
    let days = 1;
    while (!(date.getDate() === 1 && date.getMonth() === 0)) {
        date.setDate(date.getDate() - 1);
        days++;
    }
    return days;
}
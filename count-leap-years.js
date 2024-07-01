function countLeapYears(date) {
    const startYear = 1;
    const endYear = date.getFullYear();
    let count = 0;

    for (let year = startYear; year < endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            count++;
        }
    }

    return count;
}
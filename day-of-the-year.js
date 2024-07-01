function dayOfTheYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const oneDay = 24 * 60 * 60 * 1000;

    const diffMilliseconds = date - startOfYear;
    const diffDays = Math.floor(diffMilliseconds / oneDay) + 1;

    return diffDays;
}
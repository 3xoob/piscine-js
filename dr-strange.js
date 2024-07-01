function addWeek(date) {
    const epoch = new Date('0001-01-01');
    const dayMilliseconds = 24 * 60 * 60 * 1000;
    const daysDifference = Math.floor((date - epoch) / dayMilliseconds);
    const weekIndex = daysDifference % 14;

    const daysOfWeek = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
    ];

    return daysOfWeek[weekIndex];
}

function timeTravel({ date, hour, minute, second }) {
    const newDate = new Date(date);

    if (typeof hour === 'number') newDate.setHours(hour);
    if (typeof minute === 'number') newDate.setMinutes(minute);
    if (typeof second === 'number') newDate.setSeconds(second);

    return newDate;
}
function matchCron(cronPattern, date) {
    const fields = cronPattern.split(' ');
    const cronMinute = fields[0];
    const cronHour = fields[1];
    const cronDayOfMonth = fields[2];
    const cronMonth = fields[3];
    const cronDayOfWeek = fields[4];

    const minute = date.getMinutes().toString();
    const hour = date.getHours().toString();
    const dayOfMonth = date.getDate().toString();
    const month = (date.getMonth() + 1).toString();
    const dayOfWeek = (date.getDay() === 0 ? 7 : date.getDay()).toString();

    function matchField(cronField, value) {
        return cronField === '*' || cronField === value;
    }

    return (
        matchField(cronMinute, minute) &&
        matchField(cronHour, hour) &&
        matchField(cronDayOfMonth, dayOfMonth) &&
        matchField(cronMonth, month) &&
        matchField(cronDayOfWeek, dayOfWeek)
    );
}
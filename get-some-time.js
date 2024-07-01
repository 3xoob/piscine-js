function firstDayWeek(week, year) {
    let time = new Date(year, 0, 1);
    let dayOfYear = (week - 1) * 7;
    time.setDate(time.getDate() + dayOfYear);
    while (time.getDay() !== 1) {
        time.setDate(time.getDate() - 1);
    }

    function formattedDate(d) {
        let month = String(d.getMonth() + 1).padStart(2, '0');
        let day = String(d.getDate()).padStart(2, '0');
        let year = String(d.getFullYear());
        return `${day}-${month}-${year}`;
    }
    return formattedDate(time);
}
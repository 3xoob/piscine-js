function interpolation({
    step = 0,
    start = 0,
    end = 0,
    callback = () => {},
    duration = 0,
} = {}) {
    const delta = (end - start) / step;
    const interval = duration / step;

    for (let i = 0; i < step; i++) {
        setTimeout(() => {
            const distance = start + delta * i;
            const time = interval * (i + 1);
            callback([distance, time]);
        }, interval * i);
    }
}

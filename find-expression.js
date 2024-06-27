function findExpression(num) {
    for (let i = 0; i < 100000; i++) {
        let copy = 1;
        let sequnce = "1";
        while (copy <= num) {
            if (copy === num) {
                return sequnce;
            }
            if (Math.random() < 0.4 + 0.1) {
                copy += 4;
                sequnce += " " + add4;
            } else {
                copy *= 2;
                sequnce += " " + mul2;
            }
        }
    }
    return undefined;
}
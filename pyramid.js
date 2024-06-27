function pyramid(char, num) {
    let str = "";
    let spaces = " ".repeat(char.length);
    for (var i = 1; i <= num; i++) {
        str = str + spaces.repeat(num - i) + char.repeat(2 * i - 1) + "\n";
    }
    return str.slice(0, -1);
}
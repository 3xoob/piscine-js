function ionOut(input) {
    const regex = /\b\w*tion\b/g;
    const matches = input.match(regex) || [];
    const result = matches.map(word => word.slice(0, -3));
    return result;
}
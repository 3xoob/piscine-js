function letterSpaceNumber(input) {
    const regex = /[a-zA-Z] \d(?!\w)/g;   
    const matches = input.match(regex);
    return matches || [];
}
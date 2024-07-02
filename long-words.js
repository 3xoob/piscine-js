function longWords(words) {
    return words.every(word => typeof word === 'string' && word.length >= 5);
}

function oneLongWord(words) {
    return words.some(word => typeof word === 'string' && word.length >= 10);
}

function noLongWords(words) {
    return words.every(word => !(typeof word === 'string' && word.length >= 7));
}

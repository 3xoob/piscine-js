#!/usr/bin/env node
import { argv } from 'process';
import { writeFileSync } from 'fs';
const makeVeryDisco = (word) => {
    const middle = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, middle);
    const secondHalf = word.slice(middle);
    return secondHalf + firstHalf;
};
const main = () => {
    const input = argv[2];

    if (!input) {
        console.log('Please provide a word or sentence as an argument.');
        return;
    }
    const veryDiscoResult = input.split(' ').map(makeVeryDisco).join(' ');
    writeFileSync('verydisco-forever.txt', veryDiscoResult);
    console.log('The result has been written to verydisco-forever.txt');
};
main();

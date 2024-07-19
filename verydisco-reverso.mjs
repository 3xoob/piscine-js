#!/usr/bin/env node

import { argv } from 'process';
import { readFileSync } from 'fs';

const decipherVeryDisco = (word) => {
    const length = word.length;
    const middle = Math.ceil(length / 2);
    const firstHalf = word.slice(-middle);
    const secondHalf = word.slice(0, -middle);
    return firstHalf + secondHalf;
};

const main = () => {
    const fileName = argv[2];

    if (!fileName) {
        console.log('Please provide a file name as an argument.');
        return;
    }

    try {
        const fileContent = readFileSync(fileName, 'utf8');
        const decipheredResult = fileContent.split(' ').map(decipherVeryDisco).join(' ');
        console.log(decipheredResult);
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
    }
};

main();

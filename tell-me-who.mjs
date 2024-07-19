#!/usr/bin/env node

import { argv } from 'process';
import { readdirSync } from 'fs';
import { resolve } from 'path';

const main = () => {
    const directoryPath = argv[2] || '.';
    const resolvedPath = resolve(directoryPath);

    try {
        const entries = readdirSync(resolvedPath);
        const guestFiles = entries.filter(entry => entry.endsWith('.json'));
        const sortedEntries = guestFiles
            .map(entry => {
                const [name] = entry.split('.json');
                return name.split('_').reverse().join(' ');
            })
            .sort();

        sortedEntries.forEach((name, index) => {
            console.log(`${index + 1}. ${name}`);
        });
    } catch (err) {
        console.error(`Error reading directory: ${err.message}`);
    }
};

main();

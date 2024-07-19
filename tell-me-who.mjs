#!/usr/bin/env node

import { argv } from 'process';
import { readdirSync } from 'fs';
import { resolve } from 'path';

const main = () => {
    const directoryPath = argv[2] || '.';
    const resolvedPath = resolve(directoryPath);

    try {
        const entries = readdirSync(resolvedPath);
        const sortedEntries = entries.sort();
        sortedEntries.forEach((entry, index) => {
            const [lastName, firstName] = entry.split('_');
            const formattedName = `${index + 1}. ${lastName} ${firstName}`;
            console.log(formattedName);
        });
    } catch (err) {
        console.error(`Error reading directory: ${err.message}`);
    }
};

main();

#!/usr/bin/env node

import { argv } from 'process';
import { readdirSync } from 'fs';
import { resolve } from 'path';

const main = () => {
    const directoryPath = argv[2] || '.';
    const resolvedPath = resolve(directoryPath);

    try {
        const entries = readdirSync(resolvedPath);
        console.log(`Number of entries in directory "${resolvedPath}": ${entries.length}`);
    } catch (err) {
        console.error(`Error reading directory: ${err.message}`);
    }
};

main();

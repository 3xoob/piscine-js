#!/usr/bin/env node

import { argv } from 'process';
import { readdir } from 'fs/promises';
import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { createUnzip } from 'zlib';

const pipelineAsync = promisify(pipeline);

const unzipFile = async (zipPath, extractPath) => {
    await pipelineAsync(
        createReadStream(zipPath),
        createUnzip(),
        createWriteStream(extractPath)
    );
    console.log(`Extracted ${zipPath} to ${extractPath}`);
};

const main = async () => {
    const zipFilePath = '/mnt/data/guests.zip';
    const extractPath = './guests';
    
    await unzipFile(zipFilePath, extractPath);
    
    const directoryPath = argv[2] || extractPath;
    const resolvedPath = resolve(directoryPath);

    try {
        const entries = await readdir(resolvedPath);
        console.log(`Number of entries in directory "${resolvedPath}": ${entries.length}`);
    } catch (err) {
        console.error(`Error reading directory: ${err.message}`);
    }
};

main();

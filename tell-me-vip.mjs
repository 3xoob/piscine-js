#!/usr/bin/env node

import { argv } from 'process';
import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, resolve } from 'path';

const main = async () => {
    const directoryPath = argv[2] || '.';
    const resolvedPath = resolve(directoryPath);

    try {
        await mkdir(resolvedPath, { recursive: true });

        const files = await readdir(resolvedPath);
        const jsonFiles = files.filter(file => file.endsWith('.json'));

        const guests = [];
        for (const file of jsonFiles) {
            const filePath = join(resolvedPath, file);
            const data = await readFile(filePath, 'utf8');
            const jsonData = JSON.parse(data);

            if (jsonData.answer === 'YES') {
                const [lastname, firstname] = jsonData.name.split('_');
                guests.push({ lastname, firstname });
            }
        }

        guests.sort((a, b) => {
            if (a.lastname < b.lastname) return -1;
            if (a.lastname > b.lastname) return 1;
            return a.firstname.localeCompare(b.firstname);
        });

        const output = guests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}`).join('\n');
        await writeFile(join(resolvedPath, 'vip.txt'), output);

        console.log('VIP list has been saved to vip.txt');
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
};

main();

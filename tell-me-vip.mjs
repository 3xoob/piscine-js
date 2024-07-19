#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

const inputFile = 'guests.json';
const outputFile = 'vip.txt';

const readGuests = async () => {
  try {
    const filePath = path.join(__dirname, inputFile);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading guests file:', error);
    return [];
  }
};

const filterAndSortVIPs = async () => {
  try {
    const guests = await readGuests();
    const vips = guests
      .filter(guest => guest.response === 'YES')
      .sort((a, b) => {
        if (a.lastname < b.lastname) return -1;
        if (a.lastname > b.lastname) return 1;
        if (a.firstname < b.firstname) return -1;
        if (a.firstname > b.firstname) return 1;
        return 0;
      });

    const formattedVIPs = vips.map((vip, index) => `${index + 1}. ${vip.lastname} ${vip.firstname}`).join('\n');

    const outputPath = path.join(__dirname, outputFile);
    await fs.writeFile(outputPath, formattedVIPs);
    console.log(`VIP list written to ${outputFile}`);
  } catch (error) {
    console.error('Error filtering and sorting VIPs:', error);
  }
};

filterAndSortVIPs();


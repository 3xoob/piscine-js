import { promises as fsPromises, mkdir } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputFilePath = join(__dirname, 'guests.json');
const outputFilePath = join(__dirname, 'vip.txt');

const { readFile, writeFile } = fsPromises;

async function main() {
  try {
    const data = await readFile(inputFilePath, 'utf8');
    const guests = JSON.parse(data);

    const yesGuests = guests.filter(guest => guest.response === 'YES');

    yesGuests.sort((a, b) => {
      if (a.lastname < b.lastname) return -1;
      if (a.lastname > b.lastname) return 1;
      if (a.firstname < b.firstname) return -1;
      if (a.firstname > b.firstname) return 1;
      return 0;
    });

    await mkdir(dirname(outputFilePath), { recursive: true });

    if (yesGuests.length === 0) {
      await writeFile(outputFilePath, '', 'utf8');
      console.log('No guests responded \'YES\'. VIP list saved as empty.');
    } else {
      const formattedGuests = yesGuests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}`);
      await writeFile(outputFilePath, formattedGuests.join('\n'), 'utf8');
      console.log('VIP list saved successfully to vip.txt');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

main();

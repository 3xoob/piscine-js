import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const randStr = () => Math.random().toString(36).substr(2, 9);

export default async function handler(ctx) {
  const dirName = `guests-${randStr()}`
  const dirPath = path.join(ctx.tmpPath, dirName)
  await fs.promises.mkdir(dirPath)

  const guestsFile = path.join(dirPath, 'guests.json');
  const vipFile = path.join(dirPath, 'vip.txt');
  await fs.promises.writeFile(vipFile, '');
  fs.readFile(guestsFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const guests = JSON.parse(data);
    const vipGuests = guests.filter((guest) => guest.response === 'YES');

    vipGuests.sort((a, b) => {
      if (a.lastname < b.lastname) return -1;
      if (a.lastname > b.lastname) return 1;
      if (a.firstname < b.firstname) return -1;
      if (a.firstname > b.firstname) return -1;
      return 0;
    });

    const vipList = vipGuests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}`);

    fs.writeFile(vipFile, vipList.join('\n'), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('VIP list saved to vip.txt');
      }
    });
  });

  return { data: fs.readFileSync(vipFile, 'utf8') };
}
import fs from 'fs';
import path from 'path';

const guestsFile = path.join(__dirname, 'guests.json');
const vipFile = path.join(__dirname, 'vip.txt');

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
    if (a.firstname > b.firstname) return 1;
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
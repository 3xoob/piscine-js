import { argv } from 'process';
const makeVeryDisco = (word) => {
    const middle = Math.ceil(word.length / 2);
    const firstHalf = word.slice(0, middle);
    const secondHalf = word.slice(middle);
    return secondHalf + firstHalf;
};

const main = () => {
    const input = argv[2];

    if (!input) {
        console.log('Please provide a word or sentence as an argument.');
        return;
    }

    const veryDiscoResult = input.split(' ').map(makeVeryDisco).join(' ');
    console.log(veryDiscoResult);
};
main();

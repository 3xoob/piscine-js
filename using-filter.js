function filterShortStateName(states) {
    return states.filter(state => state.length < 7);
}

function filterStartVowel(states) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return states.filter(state => vowels.includes(state[0].toLowerCase()));
}

function filter5Vowels(states) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return states.filter(state => {
        let vowelCount = 0;
        for (let char of state.toLowerCase()) {
            if (vowels.includes(char)) {
                vowelCount++;
            }
        }
        return vowelCount >= 5;
    });
}

function filter1DistinctVowel(states) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return states.filter(state => {
        const distinctVowels = new Set();
        for (let char of state.toLowerCase()) {
            if (vowels.includes(char)) {
                distinctVowels.add(char);
            }
        }
        return distinctVowels.size === 1;
    });
}

function multiFilter(states) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return states.filter(state => {
        const { capital, name, tag, region } = state;
        const hasEightCharCapital = capital.length >= 8;
        const nameStartsWithVowel = vowels.includes(name[0].toLowerCase());
        const tagHasVowel = tag.toLowerCase().split('').some(char => vowels.includes(char));
        const isNotSouth = region.toLowerCase() !== 'south';
        
        return hasEightCharCapital && !nameStartsWithVowel && tagHasVowel && isNotSouth;
    });
}

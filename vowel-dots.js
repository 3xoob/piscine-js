const vowels = /[aeiou]/gi;
function vowelDots(input) {
    const result = input.replace(vowels, '$&.');
    return result;
}

function vowelDots(input) {
    const vowels = /[aeiou]/gi;
    const result = input.replace(vowels, '$&.');
    return result;
}
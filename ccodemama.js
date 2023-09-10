function main(input) {

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let isVowel = false;
    for (let char of input.toLowerCase()) {
        if (vowels.includes(char)) {
            console.log("The string contains a vowel.");
            isVowel = true;
            break;
        }
    }
    if (!isVowel) {
        console.log("The string does not contain any vowels.");
    }
}

// Example usage:
main("Hello, World!"); // This will print "The string contains a vowel."
main("Rhythm"); // This will print "The string does not contain any vowels."

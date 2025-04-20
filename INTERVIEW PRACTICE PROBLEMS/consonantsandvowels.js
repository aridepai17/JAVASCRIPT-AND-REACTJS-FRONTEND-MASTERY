// Create a function that takes in a sentence and returns a running list of consonants and vowels per word. //

function stringcode(sentence) {
    function countConsonantsAndVowels(word) {
        let consonants = 0;
        let vowels = 0;
        for (const char of word){
            if("aeiouAEIOU".includes(char)) {
                vowels++;
            }
            else {
                consonants++;
            }
        }
        return consonants + " " + vowels;
    }

    const words = sentence.split(" ");
    console.log(words);

    const consonantCount = words.map(word => countConsonantsAndVowels(word));
    return consonantCount;
}

console.log(stringcode("Hello World")); // [ '3 2', '4 1' ]
console.log(stringcode("Cristiano Ronaldo")); // [ '5 4', '4 3' ]
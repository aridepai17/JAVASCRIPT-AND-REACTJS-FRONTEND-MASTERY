// Given a string, reverse all the words which have odd lengths.

function reverseOdd(str){
    function reverseString(str){
        return str.split("").reverse().join("");
    }

    let words = str.split(" ");
    for (let i = 0; i < words.length; i++){
        if(words[i].length % 2 !== 0){
            words[i] = reverseString(words[i]);
        }
    }
    return words.join(" ");
}

console.log(reverseOdd("Hello World")); // "olleH dlroW"
console.log(reverseOdd("I am a student ")); // "I ma a tneduts"
console.log(reverseOdd("This is a test")); // "sihT is a tset"
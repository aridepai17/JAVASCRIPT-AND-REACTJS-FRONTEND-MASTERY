// Create a function that determines whether a number is Oddish or Evenish.
/* A number is Oddish if the sum of its digits is odd, and it is Evenish if 
the sum of its digits is even. Return "Oddish" or "Evenish" accordingly.*/

function oddishOrevenish(num) {
    const digits = num.toString().split("").map(Number);

    const sum = digits.reduce((acc, digit) => acc + digit, 0);

    return sum % 2 === 0 ? "Evenish" : "Oddish";
}

console.log(oddishOrevenish(121)); // "Evenish"
console.log(oddishOrevenish(122)); // "Oddish"
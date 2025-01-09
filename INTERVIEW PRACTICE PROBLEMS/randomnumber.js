// Create a function that generates a random number between a given range. //

function randomnumber( min , max ) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomnumber(1, 10)); // Random number between 1 and 10
console.log(randomnumber(100, 1000)); // Random number between 100 and 1000
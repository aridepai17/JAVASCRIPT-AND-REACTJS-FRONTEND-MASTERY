// var ( older way, function scoped)
var name = 'John Wick';

// let ( modern, block scoped, can be reassigned)
let age = 30;
age = 31; // reassigned

// const ( constant, cannot be reassigned)
const PI = 3.14;
// PI = 3.15; // error


// if-else statements
let temperature = 25;

if (temperature > 30) {
    console.log('It is hot outside');
} else if (temperature >= 20 && temperature <= 30) {
    console.log('It is warm outside');
} else {
    console.log('It is cold outside');
}

// Ternary operator (shorthand if-else)
let canDrive = age > 18 ? 'yes' : 'no';

// Standard for loop
for (let i = 0; i < 5; i++) {
    console.log('Iteration: ${i}');
}

// Looping through an array
let fruits = ['Apple', 'Banana', 'Orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Modern forEach loop
fruits.forEach( fruit => {  
    console.log(fruit);
});

// For ... of loop ( modern way to iterate )
for ( let fruit of fruits ) {
    console.log(fruit);
}
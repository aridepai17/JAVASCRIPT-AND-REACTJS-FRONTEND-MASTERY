// Conditional Statements

// 1. if - else Statement
let age = 16;
if (age >= 18) {
    console.log('You are an adult');
}
else {
    console.log('You are a minor');
}

// 2. nested if - else Statement
let name = 'John';
let lastname = 'Wick';
if (name == 'John') {
    if (lastname == 'Wick') {
        console.log('You are John Wick');
    }
    else {
        console.log('You are not John Wick');
    }
}
else {
    console.log('You are not John');
}

// 3. else if Statement
let a = 10;
let b = 20;

if (a > b) {
    console.log('a is greater than b');
}
else if (a < b) {
    console.log('a is less than b');
}
else {
    console.log('a is equal to b');
}

// 4. switch statement
let ch = 1;
switch (ch) {
    case 1:
        console.log("I'm 1");
        break;
    case 2:
        console.log("I'm 2");
        break;
    case 3:
        console.log("I'm 3");
        break;
    default:
        console.log("I'm default");
        break;
}



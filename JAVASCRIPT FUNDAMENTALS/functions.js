// Functions Implementation

function add(a, b) {
    console.log(a + b);
}
let x = 10;
let y = 3;
add(x, y); // 13

// global and local variables
let a = 5; // global variable
function local(){
    let b = 10; // local variable
    console.log(a); // 5
}
local();
console.log(b); // ReferenceError: b is not defined

// Another way to define a function
let addition = (a, b) => console.log(a + b);
addition(10, 20); // 30
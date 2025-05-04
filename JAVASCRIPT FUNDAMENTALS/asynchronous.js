// Asynchronous JavaScript
//  Definition: Asynchronous JavaScript allows code to run without blocking the main thread, enabling non-blocking operations.

console.log("Start");
console.log("Middle");
console.log("End");

//  Example: Using setTimeout to simulate asynchronous behavior
console.log("Start");
setTimeout(function() {
    console.log("Middle");
}, 1000); // 1 second delay
console.log("End");
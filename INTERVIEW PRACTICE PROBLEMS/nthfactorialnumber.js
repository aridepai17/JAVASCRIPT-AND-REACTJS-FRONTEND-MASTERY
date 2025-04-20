// Implement a recursive function to find the nth factorial number.

function fibonacci(n){
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test the function
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 2 
console.log(fibonacci(3)); // Output: 3         
console.log(fibonacci(4)); // Output: 5
console.log(fibonacci(5)); // Output: 8
console.log(fibonacci(6)); // Output: 13
console.log(fibonacci(7)); // Output: 21
/* Write a function that calculates the factorial of a given number. */

// Factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120
// Factorial of 1 is 1
// Factorial of 0 is 1

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else{
        let fact = 1;
        for ( let i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }
}

console.log(factorial(7)); // 5040
console.log(factorial(5)); // 120
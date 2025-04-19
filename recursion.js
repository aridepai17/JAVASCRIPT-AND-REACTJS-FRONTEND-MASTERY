function printNumbersRecursive(n){
    if ( n <= 10 ) {
        console.log(n);
        printNumbersRecursive(n + 1);
    }
}
printNumbersRecursive(1);
// This function prints numbers from 1 to 10 using recursion.

function factorial(n){
    if (n == 0 ){
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(6)); // 720
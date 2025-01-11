/* Implement a recursive fucntion to find the nth fibonacci number. */

function fibonacci(n){
    if (n <= 1) {
        return n;
    }
    else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(10)); // 55
console.log(fibonacci(20)); // 6765
console.log(fibonacci(5)); // 5
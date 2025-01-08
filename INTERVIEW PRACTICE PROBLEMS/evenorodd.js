/* Write a function that checks if a number is eveno ro odd and returns 
"even" or "odd" accordingly. */

function checkevenorodd(num){
    if (num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(checkevenorodd(4)); // Even
console.log(checkevenorodd(7)); // Odd
console.log(checkevenorodd(10)); // Even
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in 
// the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(arr){
    for(const num of arr){
        if(num === 7){
            return "Boom!";
        }
    }
    return "there is no 7 in the array";
}

// Example usage:
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // "Boom!"
console.log(sevenBoom([8, 6, 33, 100])); // "there is no 7 in the array"
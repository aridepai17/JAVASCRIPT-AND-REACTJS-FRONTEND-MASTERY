// for in and for of loops implementation

/*
The for...in statement iterates over all non-Symbol, 
enumerable properties of an object.
The for...of statement creates a loop iterating over 
iterable objects like arrays, strings, etc.
*/

// for...in loop implementation
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let index in nums) {
    sum += nums[index];
}
console.log(sum); // 55

// for...of loop implementation
let sums = 0;
for (let num of nums) {
    sums += num;
}
console.log(sums); // 55
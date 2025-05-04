// Array Implementation

let names = ['John', 'Jane', 'Dean', 'Doe', 'Elizabeth']
console.log(names[0]); // John
console.log(names[1]); // Jane
console.log(names.length); // 5

let details = ['Dean', 'Winchester', 30, 'Kansas']
console.log(details[0]); // Dean
console.log(details[1]); // Winchester
console.log(details[2]); // 30
console.log(details[3]); // Kansas

// Array Methods
let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple']
console.log(fruits.length); // 5
console.log(fruits.toString()); // Apple,Banana,Mango,Orange,Pineapple
console.log(fruits.join(' * ')); // Apple * Banana * Mango * Orange * Pineapple
console.log(fruits.pop()); // Pineapple
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]
console.log(fruits.push('Kiwi')); // 5
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange', 'Kiwi' ]
console.log(fruits.shift()); // Apple
console.log(fruits); // [ 'Banana', 'Mango', 'Orange', 'Kiwi' ]
console.log(fruits.unshift('Apple')); // 5
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange', 'Kiwi' ]
console.log((fruits.splice(2, 1, 'Lemon', 'Pineapple'))); // [ 'Mango' ]
console.log(fruits); // [ 'Apple', 'Banana', 'Lemon', 'Pineapple', 'Orange', 'Kiwi' ]
console.log(fruits.concat(['Mango', 'Orange'])); // [ 'Apple', 'Banana', 'Lemon', 'Pineapple', 'Orange', 'Kiwi', 'Mango', 'Orange' ]
console.log(fruits.slice(2, 4)); // [ 'Lemon', 'Pineapple' ]
console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Kiwi', 'Lemon', 'Orange', 'Pineapple' ]
console.log(fruits.reverse()); // [ 'Pineapple', 'Orange', 'Lemon', 'Kiwi', 'Banana', 'Apple' ]
console.log(fruits.indexOf('Kiwi')); // 3
console.log(fruits.indexOf('Mango')); // -1

// Functions using Arrays
let num = [1, 2, 3, 4, 5]
num.forEach((val, index, array) => {
    console.log(val + " " + index + " " + array);
}); // 1 0 1,2,3,4,5 2 1 1,2,3,4,5 3 2 1,2,3,4,5 4 3 1,2,3,4,5 5 4 1,2,3,4,5

num.forEach((val) => {
    console.log(val);
}); // 1 2 3 4 5

num.forEach((index) => {
    console.log(index);
}); // 1 0 1,2,3,4,5

let numbers = [10, 20, 35, 19, 25, 60]
let a = numbers.findLastIndex((val) => {
    return val == 10
})
console.log(a); // 0

let numberals = '10, 20, 30, 40, 50'
let arr = num.split(', ');
arr.forEach((val) => {
    console.log(val);
});
console.log(arr); // [ '10', '20', '30', '40', '50' ]

let joining = arr.join('and');
console.log(joining); // 10and20and30and40and50



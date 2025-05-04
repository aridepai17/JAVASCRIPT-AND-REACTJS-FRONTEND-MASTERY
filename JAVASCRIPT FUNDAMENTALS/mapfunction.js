// map function

/* 
map function is used to iterate over an array and
perform some operation on each element of the array.
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const detailsMap = nums.map((num, index, array) => { 
    return `Index ${index} has value ${num} in array ${array}`;
});
console.log(detailsMap);

const numbers = [ 1, 2, 3, 4, 5];
const squares = numbers.map((num) => {
    return num * num;
});
console.log(squares);


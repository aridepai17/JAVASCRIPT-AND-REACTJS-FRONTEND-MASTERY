// slice function implementation

/*
The slice() method returns a shallow copy of a portion of 
an array into a new array object selected from begin to end 
(end not included) where begin and end represent the index of items 
in that array. The original array will not be modified.
*/

/* 
Syntax of slice() method
array.slice([begin[, end]])
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const slicednums = nums.slice(2, 5);
console.log(slicednums); // [3, 4, 5]

const names = ['Alex', 'Bob', 'Charlie', 'David', 'Edward'];
const slicednames = names.slice(2, 4);
console.log(slicednames); // ['Charlie', 'David']
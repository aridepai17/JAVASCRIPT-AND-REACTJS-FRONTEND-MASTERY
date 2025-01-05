// splice function implementation

/* 
The splice() method changes the contents of an array by 
removing or replacing existing elements and/or adding new 
elements in place.
*/

/* Syntax of splice() method
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.splice(2, 1, 11, 12, 13);
console.log(nums); // [1, 2, 11, 12, 13, 4, 5, 6, 7, 8, 9, 10]

// Easier implementation of splice function
const names = ['Alex', 'Bob', 'Charlie', 'David', 'Edward'];
names.splice(2, 1, 'Brian', 'Carl');
console.log(names); // ['Alex', 'Bob', 'Brian', 'Carl', 'David', 'Edward']

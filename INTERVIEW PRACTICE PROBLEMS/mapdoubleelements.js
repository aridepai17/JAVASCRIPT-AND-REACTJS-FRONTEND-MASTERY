// Use map() to double all the elements in an array. // 

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function doubledelementarray(array) {
    return array.map( element => element * 2);
}

console.log(doubledelementarray(array1)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
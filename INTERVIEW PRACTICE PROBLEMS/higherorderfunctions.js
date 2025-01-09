/*
Write a function that takes an array of numbers and returns a new array 
with only the even numbers 
*/

let array1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function newevenarray(array){
    let evenarray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            evenarray.push(array[i]);
        }
    }
}

console.log(newevenarray(array1)); // [2, 4, 6, 8, 10]
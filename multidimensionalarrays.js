// Multidimensional array implementation

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

arr.forEach((element => {
    element.forEach((el) => {
        console.log(el)
    })
})); // 1 2 3 4 5 6 7 8 9

for (let ar of arr){
    for (let a of ar){
        console.log(a)
    }
} // 1 2 3 4 5 6 7 8 9

/*
The first implementation uses the forEach() method to iterate over the outer 
array and then the inner array.
The second implementation uses the for...of loop to iterate over the outer
array and then the inner array.
*/
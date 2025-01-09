// Find the largest element in an array using the reduce() method. //

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function largestelement(array) {
    return array.reduce((acc, curr) => { 
        if (acc > curr) { 
            return acc;
        }
        else {
            return curr;
        }
    });
}

console.log(largestelement(array1)); // 10
/* Create a JavaScript function that generates a 2D array with specified number of rows and columns.
Each element in the array should contain the sum of its row index and column index. Once you've created
the array, write two additional functions ot display the array  in its original form and in reverse. */

function multidimensionalarray( rows, columns ) {
    let arr = [];
    for(let i = 0; i < rows; i++) {
        let row = [];
        for ( let j = 0; j < columns; j++) {
            row.push(i + j);
        }
        arr.push(row);
    }
    return arr;
}

function display(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].join(" "));
    }
}

function reversedisplay(arr){
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i].reverse().join(" "));
    }
}

const rows = 3;
const columns = 4;

const multiArray = multidimensionalarray(rows, columns);
display(multiArray); // Output: [ [ 0, 1, 2, 3 ], [ 1, 2, 3, 4 ], [ 2, 3, 4, 5 ] ]
reversedisplay(multiArray); // Output: [ [ 5, 4, 3, 2 ], [ 4, 3, 2, 1 ], [ 3, 2, 1, 0 ] ]
/* Print the numbers from 1 to 5 to the console using a loop. */


// for loop implementation
for( let i = 1; i <= 5; i++ ) {
    console.log(i);
}

// while loop implementation
let i = 1;
while( i <= 5 ) {
    console.log(i);
    i++;
}

// do while loop implementation
let j = 1;
do {
    console.log(j);
    j++;
} while( j <= 5 );

// forEach loop implementation
let numbers = [1, 2, 3, 4, 5];
numbers.forEach( number => console.log(number) );
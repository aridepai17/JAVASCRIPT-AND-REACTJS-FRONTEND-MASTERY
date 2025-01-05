// Loops

// For loop
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

for (var i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`); // Prints the 2 times table
}

// while loop
var i = 1;
while (i <= 10) {
    console.log(`2 x ${i} = ${2 * i}`);
    i++;
}

// do-while loop
var i = 1;
do {
    console.log(`2 x ${i} = ${2 * i}`);
    i++;
} while (i <= 10);
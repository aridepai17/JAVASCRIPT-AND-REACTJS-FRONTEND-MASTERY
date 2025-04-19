const arr = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ];
console.log(arr);

const set1 = new Set(arr);

set1.add(10); // Duplicate, will not be added
set1.add(110); // New value, will be added
set1.add("Hello"); // New value, will be added
console.log(set1);

length = 0;
for ( let element of set1 ) {
    length++;
}
console.log("Length of set1: " + length);
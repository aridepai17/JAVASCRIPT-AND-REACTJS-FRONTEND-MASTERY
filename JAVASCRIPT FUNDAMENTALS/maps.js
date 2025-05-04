var map1 = new Map([[1, "one"], ["fName", "Mickey"], ["whole number", [1, 2, 3]]]);
console.log(map1); 
// Map(3) { 1 => 'one', 'fName' => 'Mickey', 'whole number' => [ 1, 2, 3 ] }

console.log(map1.get(1)); // one
console.log(map1.get("fName")); // Mickey
console.log(map1.get("whole number")); // [ 1, 2, 3 ]

var map2 = new Map();
map2.set("fname", "Mouse")
console.log(map2) // Map(1) { 'fname' => 'Mouse' }

var k = map1.keys();
console.log(k); // MapIterator { 1, 'fName', 'whole number' }

var v = map1.values();
console.log(v); // MapIterator { 'one', 'Mickey', [ 1, 2, 3 ] }

var e = map1.entries();
console.log(e); // MapIterator { [ 1, 'one' ], [ 'fName', 'Mickey' ], [ 'whole number', [ 1, 2, 3 ] ] }

console.log(map1.size); // 3

map1.delete(1);
console.log(map1); // Map(2) { 'fName' => 'Mickey', 'whole number' => [ 1, 2, 3 ] }

map1.clear();
console.log(map1); // Map(0) {}

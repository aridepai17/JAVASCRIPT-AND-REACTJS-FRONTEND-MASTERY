let sym = Symbol("Hello");
console.log(sym); // Symbol(Hello)
console.log(typeof sym); // symbol
console.log(sym.toString()); // Symbol(Hello)
console.log(sym.description); // Hello

let sym1 = Symbol("Hello");
let sym2 = Symbol("Hello");
if (sym1 == sym2) {
    console.log("Same");
}
else {
    console.log("Different");
}
// Different

let id = Symbol("id");
let obj = {
    name: "John"
};
obj[id] = 12345;

console.log(obj); // { name: 'John', [Symbol(id)]: 12345 }

for (let key in obj) {
    console.log(key); // name
}
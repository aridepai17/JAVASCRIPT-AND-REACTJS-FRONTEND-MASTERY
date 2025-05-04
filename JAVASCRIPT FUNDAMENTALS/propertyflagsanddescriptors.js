let emp = {};
emp.name = "John";

console.log(Object.getOwnPropertyDescriptor(emp, "name"));

Object.defineProperty(emp, "age", {
    value: 21,
    writable: true,
    enumerable: false,
    configurable: true
});
for ( let k in emp ){
    console.log(k);
}
console.log(Object.getOwnPropertyDescriptor(emp, "age"));
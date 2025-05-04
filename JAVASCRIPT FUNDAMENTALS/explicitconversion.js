// Explicit Type Conversion

result = '3'
result = Number(result);
console.log(result); // 3
console.log(typeof result); // number

result = null;
result = Number(result);
console.log(result); // 0
console.log(typeof result); // number

result = true;
result = String(result);
console.log(result); // 1
console.log(typeof result); // string

result = 20.2323;
result = parseInt(result);
console.log(result); // 20
console.log(typeof result); // number

result = 20.453653;
result = parseFloat(result);
console.log(result); // 20.453653
console.log(typeof result); // number
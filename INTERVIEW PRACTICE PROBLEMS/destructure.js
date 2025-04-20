// Destructure an object to get its properties //

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
}

console.log(person);

const { firstName, lastName, ...left } = person;

console.log(firstName);
console.log(lastName);
console.log(left);
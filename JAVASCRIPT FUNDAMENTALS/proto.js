function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log("Hello, ${this.name}!");
}

let user = new Person("John", 30);
user.greet(); // Hello, John!
console.log(user); // Person { name: 'John', age: 30 }

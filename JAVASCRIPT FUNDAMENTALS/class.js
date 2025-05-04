class User{
    constructor(name){
        this.name = name;
    }
sayHi(){
    console.log('Hello ' + this.name);
    }
}

let user1 = new User('Sebastian');
user1.sayHi(); // Hello Sebastian

let user2 = new User('Tate');
user2.sayHi(); // Hello Tate

let user3 = new User('McQueen');
user3.sayHi(); // Hello McQueen

console.log(User.prototype.sayHi); // [Function: sayHi]
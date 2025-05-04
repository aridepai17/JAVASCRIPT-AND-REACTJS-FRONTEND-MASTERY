// Constructor functions technically are regular funcions, there are two conventions though:
// 1. Constructor functions are capitalized
// 2. Constructor functions are called with the 'new' keyword

function User( name ){
    if (!new.target) {
        return new User(name);
    }
    this.name = name;
}

let person = User("Mickey");
console.log(person); // User { name: 'Mickey' }

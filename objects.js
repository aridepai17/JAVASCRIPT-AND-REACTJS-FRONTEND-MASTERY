// Object implementation

let obj = {
    "name": "Thomas",
    "age": 30,
    "last name": "George",
    fun: function(){
        console.log("This is a function inside an object");
    },
    arr:[20, 30, 40]
}

obj.fun(); // This is a function inside an object
console.log(obj.arr); // [ 20, 30, 40 ]
console.log(obj["name"]); // Thomas
console.log(obj["last name"]); // George
console.log(obj) // { name: 'Thomas', age: 30, 'last name': 'George', fun: [Function: fun], arr: [ 20, 30, 40 ] }

for ( let i in obj ){
    console.log(obj[i]); // Thomas 30 George [Function: fun] [ 20, 30, 40 ]
}

for ( let i in Object.keys(obj)){
    console.log(obj[i]); // Thomas 30 George [Function: fun] [ 20, 30, 40 ]
}   // This will not work as expected

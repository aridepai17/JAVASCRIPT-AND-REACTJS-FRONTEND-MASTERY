/* Create an object 'person' with properties like name, age. Then, create a new object
'student' that inherits from 'person' and has an additional property 'studentID'. Add a method
to the 'person' object and demonstrate that 'student' also has access to it. */

const person = {
    name: "Zayn",
    age: 20, 
    introduce: function(){
        return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
    }
}

const student = Object.create(person);
student.studentID = "12345";
console.log(student.introduce()); // "Hello, my name is Zayn and I am 20 years old."
console.log(student.name); // "Zayn"
console.log(student.age); // 20
console.log(student.studentID); // "12345"
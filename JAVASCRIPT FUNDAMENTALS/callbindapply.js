function fun(age, gender){
    console.log(this.fName,age,gender);
}

var obj1 = {
    fName: "John",
}

var obj2 = {
    fName: "Kenny"
}

var a = fun.bind(obj2,[12,"Male"]);
console.log(a) 
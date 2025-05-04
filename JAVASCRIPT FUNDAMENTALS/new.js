function fun(){
    let fName = "John";
    this.fName = fName;
}

var obj = new fun();
console.log(obj.fName); // John

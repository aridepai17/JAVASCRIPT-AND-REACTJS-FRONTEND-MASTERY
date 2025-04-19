var obj = {
    fName: "John",
    age: 30,
    fun: function(){
        console.log(this.fName); // 'this' is used because it is inside an object
        console.log(this.age); 
    }
}

obj.fun(); 
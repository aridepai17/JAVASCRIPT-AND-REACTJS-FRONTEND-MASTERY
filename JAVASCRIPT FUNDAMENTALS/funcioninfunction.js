function fun1(){
    console.log("I am function 1");
    function fun2(){
        console.log("I am function 2");
    }
    fun2(); // This will work because fun2 is defined in the scope of fun1
}

fun1();
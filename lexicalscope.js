function fun1(){
    var a = 1;
    console.log("I am function a = " + a);
    function fun2(){
        var a = 2;
        console.log("I am function a = " + a);
    }
    fun2();
}

fun1();
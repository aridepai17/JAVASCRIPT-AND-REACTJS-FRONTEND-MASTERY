
function fun(val){
    console.log(val);
}

function add(a, b, callback){
    let sum = a + b;
    callback(sum); // 
}
add( 5, 10, fun);
var inter = setInterval(fun, 1000);
function fun(){
    let date = new Date().toLocaleTimeString();
    console.log(date);
}

setTimeout(() => {
    clearInterval(inter);
}, 5000);
function fun(task){
    return new Promise((resolve, reject) => { 
        if (task) {
            resolve("Task completed");
        } else {
            reject("Task failed");
        }
    });
}

let onResolve = (res) => {
    console.log(res);
}

let onReject = (err) => {
    console.log(err);
}

fun(false).then(onResolve).catch(onReject); // Task failed
fun(true).then(onResolve).catch(onReject); // Task completed
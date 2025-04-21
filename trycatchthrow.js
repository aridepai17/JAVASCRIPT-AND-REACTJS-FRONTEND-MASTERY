function d(a, b){
    try{
        if(b==0){
            throw new Error("Divide by zero");
        }
        else{
            console.log(a/b);
        }
    }
    catch(err){
        console.log("Error:", err.message);
    }
}

d(10, 0); // Error: Divide by zero
d(10, 2); // 5

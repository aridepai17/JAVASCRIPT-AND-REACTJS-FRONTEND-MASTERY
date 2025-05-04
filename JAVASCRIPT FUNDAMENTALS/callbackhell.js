
function loadingdata(callback){
    setTimeout(() => {
    console.log(" 1) Loading data...");
    callback();
    }, 4000); // Simulating a delay of 4 second
}

function collectingdata(callback){
    setTimeout(() => {
    console.log(" 2) Collecting data...")
    callback();
    }, 5000);
}

function approvingdata(callback){
    setTimeout(() => {
    console.log(" 3) Approving data...");
    callback();
    }, 3000);
}

function approved(){
    console.log(" 4) Approved!");
}

loadingdata(function(){
    collectingdata(function(){
        approvingdata(function(){
            approved();
        }); 
    });
});

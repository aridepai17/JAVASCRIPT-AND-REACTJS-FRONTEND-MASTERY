function loading(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Loading Data");
            resolve();
        }, 1000);
    });
}

function approving(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Approving Data");
            resolve();
        }, 1000);
    });
}

function approved(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Approved Data");
            resolve();
        }, 1000);
    });
}

function collectingData() {
    console.log("Collecting Final Data");
}

async function Ex(){
    await loading();
    await approving();
    await approved();
}

Ex().then(collectingData).catch((err) => {
    console.log("Error:", err);
});

// Implement a function that makes multiple API calls and processes the data using callbacks

function makeAPICall(url, callback) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error('Error during API call:', error.message))
}

function handleData(data) {
    console.log('Processed data:', data);
}

function main(){
    const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/2';

    makeAPICall(apiUrl1, handleData);
    makeAPICall(apiUrl2, handleData);
}

main();
// The above code demonstrates how to make multiple API calls using callbacks.



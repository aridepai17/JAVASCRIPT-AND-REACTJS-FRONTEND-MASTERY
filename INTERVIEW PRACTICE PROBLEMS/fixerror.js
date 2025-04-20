// Implement a try-catch block to handle an error that occurs during API data fetching //

async function fetchData(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Error Fetching Data", error);
    }
}

fetchData();
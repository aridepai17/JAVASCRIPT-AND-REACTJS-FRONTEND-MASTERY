/* 
Create a function that displays the current date and time in the 
following format: Today is: Tuesday. Current time is: 10 PM : 30 : 38
*/

function getdateandtime() {
    let currentdate = new Date();
    return currentdate.toLocaleString();
}

console.log(getdateandtime()); 
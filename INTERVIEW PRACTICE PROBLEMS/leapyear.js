// Create a program that checks if a given year is a leap year //

function leapyear(year){
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
        return "Leap Year";
    }
    else{
        return "Not a Leap Year";
    }
}

console.log(leapyear(2020)); // Leap Year
console.log(leapyear(2022)); // Not a Leap Year 
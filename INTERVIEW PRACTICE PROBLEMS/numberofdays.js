// Create a function that takes the month and year ( as integers ) and returns the number of days in that month.

function isLeapYear(year) {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }

function daysInMonth(month, year) {
    if ( month === 2 ) {
        return isLeapYear(year) ? 29 : 28;
    }
    else if ( ([4, 6, 9, 11]).includes(month) ) {
        return 30;
    }
    else {
        return 31;
    }
}

console.log(daysInMonth(2, 2020)); // 29
console.log(daysInMonth(7, 2021)); // 31
console.log(daysInMonth(4, 2022)); // 30
console.log(daysInMonth(2, 20)) // 28
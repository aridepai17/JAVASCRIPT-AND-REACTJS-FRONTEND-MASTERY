/* 
Create an object representing a car with properties like make, model and year.
Add a method to car object to start the engine.
*/

let car = {
    make: "Cooper",
    model: "Mini Cooper Countryman",
    year: 2020
}

car.startEngine = function() {
    console.log("Engine started!");
}

car.startEngine(); // Engine started!
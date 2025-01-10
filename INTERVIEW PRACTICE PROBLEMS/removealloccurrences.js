// Remove all occurrencs of a specific element from an array //

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];
let target = 10;

function removeall(array, element) {
    return array.filter(item => item !== element);
}

let removed = removeall(array1, target);
console.log(removed); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
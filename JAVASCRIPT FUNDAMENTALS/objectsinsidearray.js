// Objects inside array implementation

let array1 = [
    { user: 1, name: "Thomas" },
    { user: 2, name: "Chad" },
    { user: 3, name: "David" },
    { user: 4, name: "George" }
]

for (let i in array1) {
    console.log(array1[i]); // { user: 1, name: 'Thomas' } { user: 2, name: 'Chad' } { user: 3, name: 'David' } { user: 4, name: 'George' }
}

let [item1, item2, item3, item4] = array1;
console.log(item1); // { user: 1, name: 'Thomas' }
console.log(item2); // { user: 2, name: 'Chad' }
console.log(item3); // { user: 3, name: 'David' }
console.log(item4); // { user: 4, name: 'George' }
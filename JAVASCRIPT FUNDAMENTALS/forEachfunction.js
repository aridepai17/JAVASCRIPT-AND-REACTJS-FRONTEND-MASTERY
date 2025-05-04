// forEach function implementation

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach((num) => {
    square = num * num;
    console.log(square);
});

// forEach function implementation
const numbers = [1, 2, 3, 4, 5];
let detailsEach = [];
nums.forEach((num) => {
    detailsEach.push(num * num);
})
console.log(detailsEach);

let sum = 0;
nums.forEach((nums) => {
    sum += nums;
})
console.log(sum);

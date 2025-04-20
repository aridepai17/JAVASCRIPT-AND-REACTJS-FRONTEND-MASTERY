// Create a function that takes an array of objects wihch calculaes the total price and returns it as a number. //

function getTotalPrice(groceries) {
    let total = 0;
    for (const item of groceries) {
        const itemprice = item.quantity * item.price;
        total += itemprice;
    }
    return total;
}

// Example usage:
const groceries = [
    { name: "Eggs", quantity: 12, price: 0.99 },
    { name: "Milk", quantity: 1, price: 1.29 },
    { name: "Bread", quantity: 2, price: 1.59 },
];
const totalPrice = getTotalPrice(groceries); // totalPrice = 5.45
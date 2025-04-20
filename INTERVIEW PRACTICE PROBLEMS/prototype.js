// Create a prototype for a product object with properties like name, price, and quantity.
// Add methods to calculate the total price and display product information.

function Product( name, price, quantity ) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.calculateTotalValue = function() {
    return this.price * this.quantity;
}

const product1 = new Product( "Laptop", 1000, 2 );
const totalValue1 = product1.calculateTotalValue();

const product2 = new Product( "Phone", 500, 3 );
const totalValue2 = product2.calculateTotalValue();

console.log( `Total value of ${product1.name}: $${totalValue1}` ); // Total value of Laptop: $2000
console.log( `Total value of ${product2.name}: $${totalValue2}` ); // Total value of Phone: $1500
/* Create a class representing a Book with properties like title, author, and year. Add a method
to the Book class to get the book's age (current year - publication year). */

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(myBook.title); // Output: The Great Gatsby
console.log(myBook.author); // Output: F. Scott Fitzgerald
console.log(myBook.year); // Output: 1925
console.log(myBook.getAge()); // Output: 97
/* Create a subclass 'Magazine' that extends the 'Book' class with an additional property 'issue'.
Add a method to the 'Magazine' class that returns the issue of the magazine. */

class Book {
    constructor(title, author,year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Magazine extends Book {
    constructor(title, author, year, issue) {
        super(title, author, year);
        this.issue = issue;
    }
    getIssuenumber() {
        return this.issue;
    }
}

const MyMagazine = new Magazine("National Geographic", "Bear Grylls", 2023, 7);
console.log(MyMagazine.getIssuenumber()); // Output: 7
import Book from "./book.js";
import React from "react";
import books from "./books.json"; 

const booklist = () => {
  return (
    <div>
      {books.map((element) => {
        return (
          <Book
            image={element.image}
            title={element.title}
            publisher={element.publisher}
            price={element.price}
          />
        );
      })}
    </div>
  );
};

export default booklist;

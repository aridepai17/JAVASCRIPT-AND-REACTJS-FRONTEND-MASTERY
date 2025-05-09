import React from 'react'
import './book.css'

const book = () => {
    const image = "https://m.media-amazon.com/images/I/41AH3HNFh0L._SY445_SX342_PQ95_.jpg";
    const title = "Broken Country";
    const publisher = "by Clare Leslie Hall";
    const price = "$100";
  return (
    <div className="book">
        <div className="book-image">
      <img src={image} alt={title}/>
        </div>
        <div className="book-info">
        <h2>{title}</h2>
        <p className="author">{publisher}</p>
        <p className="price">{price}</p>
        <button>Add to cart</button>
    </div>
    </div>
    )
}

export default book;

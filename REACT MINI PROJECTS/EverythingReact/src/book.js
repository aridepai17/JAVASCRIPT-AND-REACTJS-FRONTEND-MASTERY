import React from 'react'
import './book.css'

const book = (props) => {
  const {image, title, publisher, price} = props;
  return (
    <div className="book">
        {console.log(props)}
        <div className="book-image">
      <img src={image}/>
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

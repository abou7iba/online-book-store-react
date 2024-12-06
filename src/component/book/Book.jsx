import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../book-slider/Rating";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";
import "./book.css"
const Book = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === +id);
  const { addItem } = useContext(CartContext);
  const [qty , setQty ] = useState(1)

  return (
    <div className="book">
      <img src={`/books/${book.image}`} alt={book.title} />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>Author : {book.author}</p>
      <p>Price : ${book.price}</p>
      <Rating rating={book.rating} reviews={book.reviews} />
      <input className="qty-book-inpt" type="number" value={qty} onChange={e => setQty(e.target.value)} />
      <button className="add-book-to-cart" onClick={() => addItem({...book, quantity : qty })}>Add to Cart</button>
      <br />
    </div>
  );
};

export default Book;

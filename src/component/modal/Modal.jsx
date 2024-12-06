import "./modal.css";
import Rating from "../book-slider/Rating";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";

const Modal = ({ bookData, setOpenModal }) => {

    const {id, title, author, price, image , rating , reviews } = bookData;
    const {addItem}  = useContext(CartContext)
    const [qty , setQty] = useState(1)
  return (
    <div className="modal">
      <div className="modal-content">
        <i
          onClick={() => setOpenModal(false)}
          class="fa-solid fa-xmark close-modal"
        ></i>
        <div className="modal-right">
            <img src={`./books/${image}`} alt={title} />
            <p>Price: ${price}</p>
            <Rating  rating={rating} reviews={reviews}  />
            </div>
            <div className="modal-left">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <div className="qty-modal">
                <input  className="qty-inpt" type="number" min='1' max='100' value={qty} onChange={e => setQty(e.target.value)} />
                <button className="add-to-cart" onClick={() => addItem({...bookData , quantity : qty}) } >Add To Cart </button>
            </div>
            <Link to={`/book/${id}`} >More Info</Link>  
        </div>
      </div>
    </div>
  );
};

export default Modal;

import { useContext } from "react";
import  Order from "./Order";
import "./cart.css";
import CartContext from "../../context/cartContext";
const Cart = () => {
  const  { cart , addItem , removeItem } =  useContext(CartContext)
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)  
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      { total > 0 ? ( <Order total={total} /> ) : " "  }


    <div className="cart-info">
      {cart.map((item) => (
        <div key={item.id} className="book-info">
          <div className="book">
          <img
            src={`./books/${item.image}`}
            alt={item.title}
            className="book-image"
            />
            <h3>{item.title}</h3>
            <p>Author: {item.author}</p>
          <p className="price" >Price : {item.price}$</p>
          <div className="quantity">
          <button className="btn-qty" onClick={() => addItem({...item, quantity: item.quantity + 1})}   >
            <i class="fa-solid fa-plus"></i>
          </button>
          <p>{item.quantity}</p>
          <button  className="btn-qty" onClick={() => addItem({...item, quantity: item.quantity - 1})} disabled={ item.quantity <= 1} >
            <i class="fa-solid fa-minus"></i>
          </button>
          </div>

            <p className="subtotal" >Subtotal: {(item.price * item.quantity).toFixed(2)}$</p>
          </div>
          <button onClick={() => removeItem(item.id)} ><i class="fa-solid fa-trash"></i></button>
        </div>
      ))}

    </div>
      
    </div>
  );
};

export default Cart;

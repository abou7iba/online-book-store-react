import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    // add
    const addItem = (item) => {
        const isExist = cart.find(cart => cart.id === item.id)
        if(isExist) {
            const updatedCart = cart.map(cart => cart.id === item.id ? item : cart )
            setCart(updatedCart)        
        } else {
            setCart(prev => [...prev, item]);
        }
    }

    // remove
    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    }

    return ( 
    <CartContext.Provider
        value={{
            cart,
            addItem,
            removeItem,
            totalItems: cart.length,
        }
        }
    >
        {children}
    </CartContext.Provider>
     );
}
 
export default CartProvider;
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";

const HeaderCenter = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <div className="header-center">
      <div className="header-center-right">
        <i className="fa-solid fa-book-open"></i>
      </div>
      <div className="header-center-center">
        <input type="text" className="header-search" placeholder="Search..." />
        <i className="fa-solid fa-magnifying-glass sr-icon"></i>
      </div>
      <div className="header-center-left">
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
          {totalItems > 0 && (<span className="cart-count">{totalItems}</span>) }
        </Link>
      </div>
    </div>
  );
};

export default HeaderCenter;

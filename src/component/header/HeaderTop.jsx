import { Link } from "react-router-dom";

const HeaderTop = ({ toggle ,setToggle}) => {
  return (
    <div className="header-top">
      <div onClick={() => setToggle(prev => !prev)} className="header-top-right">
        { toggle ?  <i class="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
      </div>
      <div className="header-top-center">
        <i className="fa-brands fa-whatsapp"></i>
        +201003945659
      </div>
      <div className="header-top-center-logo">
        <i className="fa-solid fa-book-open"></i>
      </div>
      <div className="header-top-center">Welcome In Our BookStore</div>
      <div className="header-top-left">
        <Link to="/login" > <i className="fa-solid fa-user-plus"></i></Link>
      </div>
    </div>
  );
};

export default HeaderTop;

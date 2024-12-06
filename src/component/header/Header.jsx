import { useState } from 'react';
import './header.css'
import HeaderCenter from './HeaderCenter';
import HeaderTop from './HeaderTop';
import Nav from './Nav';
const Header = () => {
  const [toggle , setToggle] = useState(false)
  return (
    <header className="header">
        <HeaderTop setToggle={setToggle} toggle={toggle} />
        <HeaderCenter />
        <Nav toggle={toggle} setToggle={setToggle} />
    </header>
  );
};

export default Header;

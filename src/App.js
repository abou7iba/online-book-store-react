import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Home from "./component/pages/Home";
import Authers from "./component/authers/Authers";
import About from "./component/about/About";
import Cart from "./component/cart/Cart";
import Contact from "./component/contact/Contact";
import Register from "./component/forms/Register";
import Login from "./component/forms/Login";
import Book from "./component/book/Book";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authers" element={<Authers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

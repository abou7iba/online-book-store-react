import React, { useContext, useState } from "react";
import "./book-slider.css";
import Rating from "./Rating";
import Modal from "../modal/Modal";
import CartContext from "../../context/cartContext";

const BookSlider = ({ data }) => {
  const { addItem } = useContext(CartContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  // Handle Modal
  const handleOpenModal = (book) => {
    setOpenModal(true);
    setBookData(book);
  };

  // Handle Slider Navigation
  const handleSlide = (direction) => {
    const sliderWidth = 340; // عرض الشريحة الواحدة
    const visibleSlides = Math.floor(window.innerWidth / sliderWidth); // عدد الشرائح الظاهرة
    const maxIndex = (data.length - visibleSlides) * sliderWidth; // أقصى مسافة مسموحة

    if (direction === "left" && slideIndex > 0) {
      setSlideIndex(slideIndex - sliderWidth);
    } else if (direction === "right" && slideIndex < maxIndex) {
      setSlideIndex(slideIndex + sliderWidth);
    } else if (direction === "right" && slideIndex >= maxIndex) {
      // عند الوصول إلى آخر شريحة، خليه يوقف في أقصى اليسار من آخر عنصر
      setSlideIndex(maxIndex);
    }
  };

  return (
    <div className="book-slider">
      <i
        onClick={() => handleSlide("left")}
        className="fa-solid fa-circle-left book-slider-arrow-left"
      ></i>
      <div className="book-slider-wrapper">
        <div
          className="book-slider-container"
          style={{
            transform: `translateX(-${slideIndex}px)`,
          }}
        >
          {data.map((book) => (
            <div key={book.id} className="book-slider-item">
              <img src={`/books/${book.image}`} alt={book.title} />
              <h3>{book.title}</h3>
              <div className="about-item">
                <p>{book.price}$</p>
                <Rating rating={book.rating} reviews={book.reviews} />
                <div className="slider-action">
                  <i
                    onClick={() => handleOpenModal(book)}
                    className="fa-solid fa-eye"
                  ></i>
                  <i
                    className="fa-solid fa-cart-arrow-down"
                    onClick={() => addItem({ ...book, quantity: 1 })}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <i
        onClick={() => handleSlide("right")}
        className="fa-solid fa-circle-right book-slider-arrow-right"
      ></i>
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default BookSlider;

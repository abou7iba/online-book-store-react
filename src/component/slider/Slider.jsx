import "./slider.css";
import FBook from "../../images/book1.png";
import SBook from "../../images/book2.png";
import TBook from "../../images/book3.png";
import { useState } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlClick = (direction) => {
    if(direction === 'left'){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  return (
    <div className="slider-container">
      <p onClick={() => handlClick('left')} className="arrow-left" ><i class="fa-solid fa-caret-left"></i></p>
      <div style={{transform: `translateX(${slideIndex * -100}vw )`}} className="slider">
        <div className="slid f_slide">
          <div className="slide-img">
            <img src={FBook} alt="" />
          </div>
          <div className="slide-info">
            <h3>Book Title</h3>
            <p>Author Name</p>
            <p>Book Description</p>
          </div>
        </div>

        <div className="slid s_slide">
          <div className="slide-img">
            <img src={SBook} alt="" />
          </div>
          <div className="slide-info">
            <h3>Book Title</h3>
            <p>Author Name</p>
            <p>Book Description</p>
          </div>
        </div>

        <div className="slid t_slide">
          <div className="slide-img">
            <img src={TBook} alt="" />
          </div>
          <div className="slide-info">
            <h3>Book Title</h3>
            <p>Author Name</p>
            <p>Book Description</p>
          </div>
        </div>
      </div>
      <p onClick={() => handlClick('right')} className="arrow-right" ><i class="fa-solid fa-caret-right"></i></p>
    </div>
  );
};

export default Slider;

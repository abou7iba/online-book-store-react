import { books } from "../../data/books";
import HeadingTitle from "../heading-title/HeadingTitle";
import Slider from "../slider/Slider";
import BookSlider from "../book-slider/BookSlider";


const Home = () => {
  return (
    <div className="home">
      <Slider />
      <HeadingTitle title="Books" />
      <BookSlider data={books} />
    </div>
  );
};

export default Home;

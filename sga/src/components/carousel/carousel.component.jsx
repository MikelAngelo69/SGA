import React, { useState } from "react";
import "./carousel.styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://media.slidesgo.com/storage/47342277/elegant-clothing-line-social-media-strategy1704891339.jpg",
  "https://blog.bangbranding.com/wp-content/uploads/2016/09/700x511_SliderInterior.jpg",
  "https://encycolorpedia.es/0000ff.png"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((x) => (x === 0 ? images.length - 1 : x - 1));
  };

  const nextSlide = () => { 
    setCurrentIndex((x) => (x === images.length - 1 ? 0 : x + 1));

    // setCurrentIndex((x) => {
    //   if(x === images.length - 1){

    //     return x = 0

    //   } else {
    //     return x + 1
    //   }
    // })
  };

  return (
    <div className="carousel">

      <button className="carousel-btn left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : "hidden"}
          />
        ))}
      </div>

      <button className="carousel-btn right" onClick={nextSlide}>
        <FaChevronRight />
      </button>

    </div>
  );
};

export default Carousel;

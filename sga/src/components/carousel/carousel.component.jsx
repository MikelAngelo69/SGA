import React, { useState } from "react";
import "./carousel.styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Imagen1 from "../../assets/ImgPrincipal.png"
import Imagen2 from "../../assets/ImgSecundaria.png"

const images = [
  Imagen1,
  Imagen2,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
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

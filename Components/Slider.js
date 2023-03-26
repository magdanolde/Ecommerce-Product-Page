import React from "react";
import { useState } from "react";
import Next from "../images/icon-next.svg";
import Prev from "../images/icon-previous.svg";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <section className="slider">
      <div className="slider__wrapper">
        <div className="slider__circle--left">
          <img
            src={Prev}
            className="slider__arrow--left"
            onClick={goToPrevious}
          ></img>
        </div>
        <div className="slider__circle--right">
          <img
            src={Next}
            className="slider__arrow--right"
            onClick={goToNext}
          ></img>
        </div>
        <div style={slideStylesWidthBackground}></div>
      </div>
    </section>
  );
};

export default Slider;

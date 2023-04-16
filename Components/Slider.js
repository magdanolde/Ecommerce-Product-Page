import React from "react";
import { useState, useContext } from "react";
import Next from "../images/icon-next.svg";
import Prev from "../images/icon-previous.svg";
import { Context } from "../Components/contexts/TasksContext";
//
const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Slider = ({ items }) => {
  let { slides } = useContext(Context);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${items[currentIndex].url})`,
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  function renderGallery() {
    return slides.map((item, slideIndex) => {
      return (
        <div
          key={slideIndex}
          className={
            slideIndex === currentIndex
              ? "gallery__item active"
              : "gallery__item"
          }
          onClick={() => goToSlide(slideIndex)}
        >
          <img className="gallery__img" src={item.url} />
        </div>
      );
    });
  }
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
      <div className="slider__gallery">{renderGallery()}</div>
    </section>
  );
};

export default Slider;

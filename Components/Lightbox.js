import React from "react";
import { useState, useContext } from "react";
import Next from "../images/icon-next.svg";
import Prev from "../images/icon-previous.svg";
import { Context } from "../Components/contexts/TasksContext";
import Close from "../images/icon-close.svg";


const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  top: "0",
};

const Lightbox = ({ LightBoxItems, open }) => {
  let { slides, setIsOpen } = useContext(Context);
  const [lightBoxCurrentIndex, setCurrentIndexLightBox] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = lightBoxCurrentIndex === 0;
    const newIndex = isFirstSlide
      ? LightBoxItems.length - 1
      : lightBoxCurrentIndex - 1;
    setCurrentIndexLightBox(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = lightBoxCurrentIndex === LightBoxItems.length - 1;
    const newIndex = isLastSlide ? 0 : lightBoxCurrentIndex + 1;
    setCurrentIndexLightBox(newIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${LightBoxItems[lightBoxCurrentIndex].url})`,
  };

  const goToSlide = (lightBoxSlideIndex) => {
    setCurrentIndexLightBox(lightBoxSlideIndex);
  };

  function renderGallery() {
    return slides.map((item, slideIndex) => {
      return (
        <div
          key={slideIndex}
          className={
            slideIndex === lightBoxCurrentIndex
              ? "lightbox__item active"
              : "lightbox__item"
          }
          onClick={() => goToSlide(slideIndex)}
        >
          <img className="gallery__img" src={item.url} />
        </div>
      );
    });
  }

  if (!open) return null;

  return (
    <>
      <div className="lightbox__backgroud"></div>
      <div className="lightbox">
        <div className="lightbox__wrapper">
          <div style={slideStylesWidthBackground}></div>
        </div>
        <svg className="lightbox__close" onClick={()=>setIsOpen(false)} width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path className="lightbox__close--path"
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#ffffff"
            fill-rule="evenodd"
          />
        </svg>
        <div className="lightbox__circle--left">
          <img
            src={Prev}
            className="lightbox__arrow--left"
            onClick={goToPrevious}
          />
        </div>
        <div className="lightbox__circle--right">
          <img
            src={Next}
            className="lightbox__arrow--right"
            onClick={goToNext}
          />
        </div>
        <div className="lightbox__gallery">{renderGallery()}</div>
      </div>
    </>
  );
};

export default Lightbox;

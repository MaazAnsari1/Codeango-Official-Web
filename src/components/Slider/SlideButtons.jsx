import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
// import React, { useState } from "react";
import "./Slider.css";

const SlideButtons = ({ imgIndex, setimgIndex, allSlides }) => {
  const nextSlide = () => {
    const isLastIndex = imgIndex === allSlides.length - 1;
    const newIndex = isLastIndex ? 0 : imgIndex + 1;
    setimgIndex(newIndex);
  };
  const previosSlide = () => {
    const isFirstIndex = imgIndex === 0;
    const newIndex = isFirstIndex ? allSlides.length - 1 : imgIndex - 1;
    setimgIndex(newIndex);
  };
  return (
    <>
      {" "}
      <div className="arrow">
        <div className="left" onClick={previosSlide}>
          <ArrowLeftOutlined />
        </div>
        <div className="right" onClick={nextSlide}>
          <ArrowRightOutlined />
        </div>
      </div>
    </>
  );
};

export default SlideButtons;

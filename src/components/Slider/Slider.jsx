import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";
import devops from "./images/devops.png";
import upgrade from "./images/upgrade.png";
import sapfico from "./images/sapfico.png";
import SlideButtons from "./SlideButtons";

const Slider = () => {
  const [imgIndex, setimgIndex] = useState(0);
  const allSlides = [
    {
      id: 1,
      img: upgrade,
      head: "  Learn, Earn and Upgrade",
      desp: "Delivering the latest Tech Courses of the industry",
      color: "#cd9667",
    },
    {
      id: 2,
      img: devops,
      head: "DevOps Certification",
      desp: "Lowest Price Since Start",
      desp1: "Just At ₹20000",
      color: "#cfa9c9",
    },
    {
      id: 3,
      img: sapfico,
      head: "SAP FICO Certification",
      desp: "Just At ₹6000",
      color: "#e3d9d7",
    },
  ];
  // useEffect(() => {
  setTimeout(() => {
    setimgIndex((imgIndex) => (imgIndex < allSlides.length - 1 ? imgIndex + 1 : 0));
  }, 4000);
  // }, []);

  const sliderStyle = {
    backgroundColor: `${allSlides[imgIndex].color}`,
  };
  const goToSlide = (itemIndex) => {
    setimgIndex(itemIndex);
  };

  return (
    <>
      {/* <Banner /> */}
      <div className="slide-container">
        <div className="slider">
          {/* <SlideButtons allSlides={allSlides} imgIndex={imgIndex} setimgIndex={setimgIndex} /> */}
          <div className="slides">
            {allSlides.map((item) => {
              return (
                <div className="slide-wrapper" key={item.id}>
                  <div className="slider-img">
                    <img src={allSlides[imgIndex].img} alt={allSlides[imgIndex].head} />
                  </div>
                  <div className="slider-info">
                    <h1>{allSlides[imgIndex].head}</h1>
                    <p>{allSlides[imgIndex].desp}</p>
                    {allSlides[imgIndex].desp1 && <p>{allSlides[imgIndex].desp1}</p>}
                    <Link to="courses">
                      <button> Learn Now</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="dots-container">
          {allSlides.map((item, itemIndex) => {
            return <div key={item.id} className={imgIndex === itemIndex ? "dot active-dot" : "dot"} onClick={() => goToSlide(itemIndex)}></div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;

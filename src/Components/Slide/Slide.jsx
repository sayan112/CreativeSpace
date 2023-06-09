import React from "react";
 import "./Slider.scss"
import { cards } from "../../Data";
import Slider from "infinite-react-carousel/lib/carousel/slider";
const Slide = ({ children, slidesToShow, arrowsScroll, }) => {
  return (
    <>
      <div className="slide">
        <div className="container">
          <Slider
            slidesToShow={slidesToShow}
            arrowsScroll={arrowsScroll}
            shift={5}
          >
            {children}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Slide;

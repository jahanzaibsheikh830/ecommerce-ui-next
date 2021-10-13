import React, { useState } from "react";
import { slidesData } from "../../HelperData/Slider.helper";
import SliderItem from "../CardItems/SliderItem";
// import OwlCarousel from "react-owl-carousel2";
// import "owl.carousel/dist/assets/owl.carousel.css";
export default function Slider() {
  return (
    <div>
      <div>
        {/* <OwlCarousel options={{ items: 1, nav: true, margin: 25 }}> */}
        {slidesData.map((val, index) => {
          return <SliderItem slideData={val} key={index} />;
        })}
        {/* </OwlCarousel> */}
      </div>
    </div>
  );
}

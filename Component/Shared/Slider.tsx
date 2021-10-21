import React, { useState } from "react";
import { slidesData } from "../../HelpersData/Slider.helper";
import SliderItem from "../CardItems/SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "./Container";
export default function SliderMain() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div>
      <div className='slickSlider'>
        <Container>
          <Slider {...settings}>
            {slidesData.map((val, index) => {
              return <SliderItem slideData={val} key={index} />;
            })}
          </Slider>
        </Container>
      </div>
    </div>
  );
}

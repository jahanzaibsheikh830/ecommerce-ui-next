import React, { useState } from "react";
import { CategoryCardData } from "../../HelpersData/CatergoryItem.helper";
import CategoryCard from "../Card/CategoryCard";
import Container from "../Shared/Container";
import { IoMdArrowDropright } from "react-icons/io";
import { BsFillGridFill } from "react-icons/bs";
import ProductHeader from "./ProductHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VscArrowSmallRight, VscArrowSmallLeft } from "react-icons/vsc";

export default function CategoryCardItem() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <VscArrowSmallRight size={20} />,
    prevArrow: <VscArrowSmallLeft size={10} />,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='categoryCardItemMain'>
      <Container>
        <ProductHeader
          title='Top Categories'
          TitleIcon={BsFillGridFill}
          linkTitle='View all'
          color='#d23f57 '
          LinkIcon={IoMdArrowDropright}
        />
        {/* <div className='categoryCard'> */}
        <Slider {...settings}>
          {CategoryCardData.map((val, index) => {
            return (
              <div key={index}>
                <CategoryCard cardData={val} />
              </div>
            );
          })}
          {/* </div> */}
        </Slider>
      </Container>
    </div>
  );
}

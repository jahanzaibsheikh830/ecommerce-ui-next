import React from "react";
import { salesData } from "../../HelpersData/Sale.helper";
import Card from "../Card/Card";
import Container from "../Shared/Container";
import { GiElectric } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import { VscArrowSmallRight, VscArrowSmallLeft } from "react-icons/vsc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductHeader from "./ProductHeader";
export default function salesItem() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <VscArrowSmallRight size={20} />,
    prevArrow: <VscArrowSmallLeft size={10} />,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='main'>
      <Container>
        <ProductHeader
          title='Flash Deals'
          TitleIcon={GiElectric}
          linkTitle='View all'
          color='#d23f57'
          LinkIcon={IoMdArrowDropright}
        />
        <Slider {...settings}>
          {salesData.map((val, i) => {
            return (
              <div key={i} className='salesCard'>
                <Card salesData={val} />
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
}

import React from "react";
import { DiscountCardData } from "../../HelpersData/DiscountData.helper";
import Container from "../Shared/Container";
import { AiOutlineGift } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";
import DiscountCard from "../Card/FeaturedCard";
import ProductHeader from "./ProductHeader";
import { VscArrowSmallRight, VscArrowSmallLeft } from "react-icons/vsc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function DiscountCardItem() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    nextArrow: <VscArrowSmallRight size={20} />,
    prevArrow: <VscArrowSmallLeft size={10} />,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
        breakpoint: 480,
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
          title='Big Discount'
          TitleIcon={AiOutlineGift}
          linkTitle='View all'
          color='rgb(210, 63, 87)'
          LinkIcon={IoMdArrowDropright}
        />
        {/* <div className='discountCardMain'> */}
        <Slider {...settings}>
          {DiscountCardData.map((val, ind) => {
            return (
              <div key={ind} className='discountCard'>
                <DiscountCard featuredData={val} discount />
              </div>
            );
          })}
        </Slider>
        {/* </div> */}
      </Container>
    </div>
  );
}

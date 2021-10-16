import React from "react";
import { salesData } from "../../HelpersData/Sale.helper";
import Card from "../Card/Card";
import Container from "../Shared/Container";
import { GiElectric } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import styles from "../../Styles/Components/CardItems/SalesItem.module.scss";
import OwlCarousel from "react-owl-carousel2";
import "owl.carousel/dist/assets/owl.carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductHeader from "./ProductHeader";
export default function salesItem() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
    <div className={styles.main}>
      <Container>
        <ProductHeader
          title='Flash Deals'
          TitleIcon={GiElectric}
          linkTitle='View all'
          color='#d23f57  '
          LinkIcon={IoMdArrowDropright}
        />
        <Slider {...settings}>
          {salesData.map((val, i) => {
            return (
              <div key={i} className={styles.salesCard}>
                <Card salesData={val} />
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
}

import React from "react";
import { salesData } from "../helperData/sale.helper";
import Card from "./cards/card";
import Container from "./container";
import { GiElectric } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import styles from "../styles/components/salesItem.module.scss";
import OwlCarousel from "react-owl-carousel2";
import "owl.carousel/dist/assets/owl.carousel.css";
import ProductHeader from "./productHeader";
export default function salesItem() {
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
        <div className={`${styles.salesCard} "owl-carousel"`}>
          <OwlCarousel options={{ items: 4, nav: true, margin: 25 }}>
            {salesData.map((val, i) => {
              return (
                <div key={i}>
                  <Card salesData={val} />
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </Container>
    </div>
  );
}

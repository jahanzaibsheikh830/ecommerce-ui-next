import React from "react";
import { salesData } from "../helperData/sale.helper";
import Card from "./card";
import Container from "./container";
import { GiElectric } from "react-icons/Gi";
import { IoMdArrowDropright } from "react-icons/Io";
import styles from "../styles/components/salesItem.module.scss";
import OwlCarousel from "react-owl-carousel2";
import "owl.carousel/dist/assets/owl.carousel.css";
export default function salesItem() {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.salesHeader}>
          <div className={styles.salesHeading}>
            <div>
              <GiElectric className={styles.salesIcon} size={25} />
            </div>
            <div>
              <h2> Flash Deals</h2>
            </div>
          </div>
          <div className={styles.detailsPara}>
            <div>
              <p>View all</p>
            </div>
            <div>
              <IoMdArrowDropright className={styles.detailsIcon} size={20} />
            </div>
          </div>
        </div>
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

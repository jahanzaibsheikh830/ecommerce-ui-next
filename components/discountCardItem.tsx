import React from "react";
import { DiscountCardData } from "../helperData/discountData.helper";
import styles from "../styles/components/discountCardItem.module.scss";
import Container from "./container";
import { AiOutlineGift } from "react-icons/Ai";
import { IoMdArrowDropright } from "react-icons/Io";
import DiscountCard from "./featuredCard";
export default function DiscountCardItem() {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.salesHeader}>
          <div className={styles.salesHeading}>
            <div>
              <AiOutlineGift className={styles.salesIcon} size={25} />
            </div>
            <div>
              <h2>Big Discount</h2>
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
        <div className={styles.discountCardMain}>
          {DiscountCardData.map((val, ind) => {
            return <DiscountCard key={ind} featuredData={val} discount />;
          })}
        </div>
      </Container>
    </div>
  );
}

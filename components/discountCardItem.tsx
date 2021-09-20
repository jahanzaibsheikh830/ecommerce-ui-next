import React from "react";
import { DiscountCardData } from "../helperData/discountData.helper";
import styles from "../styles/components/discountCardItem.module.scss";
import Container from "./container";
import { AiOutlineGift } from "react-icons/Ai";
import { IoMdArrowDropright } from "react-icons/Io";
import DiscountCard from "./cards/featuredCard";
import ProductHeader from "./productHeader";
export default function DiscountCardItem() {
  return (
    <div className={styles.main}>
      <Container>
        <ProductHeader
          title='Big Discount'
          TitleIcon={AiOutlineGift}
          linkTitle='View all'
          color='rgb(210, 63, 87)'
          LinkIcon={IoMdArrowDropright}
        />
        <div className={styles.discountCardMain}>
          {DiscountCardData.map((val, ind) => {
            return <DiscountCard key={ind} featuredData={val} discount />;
          })}
        </div>
      </Container>
    </div>
  );
}

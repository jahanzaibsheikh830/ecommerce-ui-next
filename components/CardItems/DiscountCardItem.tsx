import React from "react";
import { DiscountCardData } from "../../HelperData/DiscountData.helper";
import styles from "../../Styles/Components/CardItems/DiscountCardItem.module.scss";
import Container from "../Shared/Container";
import { AiOutlineGift } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";
import DiscountCard from "../Cards/FeaturedCard";
import ProductHeader from "./ProductHeader";
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

import React from "react";
import { ratingCardData } from "../helperData/ratingItemsData.helper";
import Container from "./container";
import { GiStarGate } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import styles from "../styles/components/rating.module.scss";
import RatingCard from "./cards/ratingCard";
import ProductHeader from "./productHeader";
export default function RatingCardItem() {
  return (
    <div className={styles.ratingMain}>
      <ProductHeader
        title='Top Rating'
        TitleIcon={GiStarGate}
        linkTitle='View all'
        color='rgb(250, 180, 0)'
        LinkIcon={IoMdArrowDropright}
      />
      <div className={styles.ratingCardMain}>
        {ratingCardData.map((val, ind) => {
          return <RatingCard ratingData={val} key={ind} />;
        })}
      </div>
    </div>
  );
}

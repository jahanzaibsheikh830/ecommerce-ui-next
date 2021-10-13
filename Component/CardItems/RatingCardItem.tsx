import React from "react";
import { ratingCardData } from "../../HelpersData/RatingItemsData.helper";
import Container from "../Shared/Container";
import { GiStarGate } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import styles from "../../Styles/Components/CardItems/Rating.module.scss";
import RatingCard from "../Card/RatingCard";
import ProductHeader from "./ProductHeader";
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

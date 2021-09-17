import React from "react";
import { ratingCardData } from "../helperData/ratingItemsData.helper";
import Container from "./container";
import { GiStarGate } from "react-icons/Gi";
import { IoMdArrowDropright } from "react-icons/Io";

import styles from "../styles/components/rating.module.scss";
import RatingCard from "./ratingCard";
export default function RatingCardItem() {
  return (
    <div className={styles.ratingMain}>
      <div className={styles.salesHeader}>
        <div className={styles.salesHeading}>
          <div>
            <GiStarGate className={styles.salesIcon} size={25} />
          </div>
          <div>
            <h2>Top Rating</h2>
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
      <div className={styles.ratingCardMain}>
        {ratingCardData.map((val, ind) => {
          return <RatingCard ratingData={val} key={ind} />;
        })}
      </div>
    </div>
  );
}

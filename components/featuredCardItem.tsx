import React from "react";
import { featuredData } from "../helperData/featuredData.helper";
import styles from "../styles/components/fearturedCardItem.module.scss";
import { GiSeaStar } from "react-icons/Gi";
import { IoMdArrowDropright } from "react-icons/Io";
import FeaturedCard from "./featuredCard";
export default function FeaturedCardItem() {
  return (
    <div className={styles.Main}>
      <div className={styles.salesHeader}>
        <div className={styles.salesHeading}>
          <div>
            <GiSeaStar className={styles.salesIcon} size={25} />
          </div>
          <div>
            <h2>Featured Brands</h2>
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
      <div className={styles.featuresMain}>
        {featuredData.map((val, ind) => {
          return <FeaturedCard featuredData={val} key={ind} />;
        })}
      </div>
    </div>
  );
}

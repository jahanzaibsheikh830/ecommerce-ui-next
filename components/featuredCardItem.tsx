import React from "react";
import { featuredData } from "../helperData/featuredData.helper";
import styles from "../styles/components/fearturedCardItem.module.scss";
import { GiSeaStar } from "react-icons/Gi";
import { IoMdArrowDropright } from "react-icons/Io";
import FeaturedCard from "./cards/featuredCard";
import ProductHeader from "./productHeader";
export default function FeaturedCardItem() {
  return (
    <div className={styles.Main}>
      <ProductHeader
        title='Featured Brands'
        TitleIcon={GiSeaStar}
        linkTitle='View all'
        color='rgb(255, 145, 1)'
        LinkIcon={IoMdArrowDropright}
      />
      <div className={styles.featuresMain}>
        {featuredData.map((val, ind) => {
          return <FeaturedCard featuredData={val} key={ind} />;
        })}
      </div>
    </div>
  );
}

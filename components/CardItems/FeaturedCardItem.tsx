import React from "react";
import { featuredData } from "../../HelperData/FeaturedData.helper";
import styles from "../../Styles/Components/CardItems/FearturedCardItem.module.scss";
import { GiSeaStar } from "react-icons/gi";

import { IoMdArrowDropright } from "react-icons/io";
import FeaturedCard from "../Cards/FeaturedCard";
import ProductHeader from "./ProductHeader";
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
          return <FeaturedCard featuredData={val} key={ind} featured />;
        })}
      </div>
    </div>
  );
}

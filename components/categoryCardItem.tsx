import React, { useState } from "react";
import { CategoryCardData } from "../helperData/catergoryItem.helper";
import CategoryCard from "./cards/categoryCard";
import Container from "./container";
import { IoMdArrowDropright } from "react-icons/io";
import { BsFillGridFill } from "react-icons/bs";
import styles from "../styles/components/categoryCardItem.module.scss";
import ProductHeader from "./productHeader";
export default function CategoryCardItem() {
  return (
    <div className={styles.categoryCardMain}>
      <Container>
        <ProductHeader
          title='Top Categories'
          TitleIcon={BsFillGridFill}
          linkTitle='View all'
          color='#d23f57 '
          LinkIcon={IoMdArrowDropright}
        />
        <div className={styles.categoryCard}>
          {CategoryCardData.map((val, index) => {
            return (
              <div key={index}>
                <CategoryCard cardData={val} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

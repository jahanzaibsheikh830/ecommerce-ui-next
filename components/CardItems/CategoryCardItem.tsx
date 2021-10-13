import React, { useState } from "react";
import { CategoryCardData } from "../../HelperData/CatergoryItem.helper";
import CategoryCard from "../Cards/CategoryCard";
import Container from "../Shared/Container";
import { IoMdArrowDropright } from "react-icons/io";
import { BsFillGridFill } from "react-icons/bs";
import styles from "../../Styles/Components/CardItems/CategoryCardItem.module.scss";
import ProductHeader from "./ProductHeader";
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

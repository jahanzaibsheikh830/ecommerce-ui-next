import React from "react";
import Container from "./container";
import { allcategoriesData } from "../helperData/allCategories.helper";
import { IoMdArrowDropright } from "react-icons/Io";
import { BsFillGridFill } from "react-icons/Bs";
import styles from "../styles/components/allCategoryItem.module.scss";
import AllCategoryCard from "./cards/allCategoryCard";
import ProductHeader from "./productHeader";
export default function AllCategoryCardItem() {
  return (
    <div className={styles.main}>
      <Container>
        <ProductHeader
          title='Categories'
          linkTitle='View all'
          LinkIcon={IoMdArrowDropright}
          color='#D23F57'
          TitleIcon={BsFillGridFill}
        />
        <div className={styles.categoryCardMain}>
          {allcategoriesData.map((val, ind) => {
            return <AllCategoryCard categoryData={val} key={ind} />;
          })}
        </div>
      </Container>
    </div>
  );
}
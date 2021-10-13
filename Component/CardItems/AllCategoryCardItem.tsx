import React from "react";
import Container from "../Shared/Container";
import { allcategoriesData } from "../../HelpersData/AllCategories.helper";
import { IoMdArrowDropright } from "react-icons/io";
import { BsFillGridFill } from "react-icons/bs";
import styles from "../../Styles/Components/CardItems/AllCategoryItem.module.scss";
import AllCategoryCard from "../Card/AllCategoryCard";
import ProductHeader from "./ProductHeader";

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

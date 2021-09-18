import React from "react";
import Container from "./container";
import { allcategoriesData } from "../helperData/allCategories.helper";
import { IoMdArrowDropright } from "react-icons/Io";
import { HiTemplate } from "react-icons/Hi";
import styles from "../styles/components/allCategoryItem.module.scss";
import AllCategoryCard from "./allCategoryCard";
export default function ArivalItem() {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.salesHeader}>
          <div className={styles.salesHeading}>
            <div>
              <HiTemplate className={styles.salesIcon} size={25} />
            </div>
            <div>
              <h2>Categories</h2>
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
        <div className={styles.categoryCardMain}>
          {allcategoriesData.map((val, ind) => {
            return <AllCategoryCard categoryData={val} key={ind} />;
          })}
        </div>
      </Container>
    </div>
  );
}

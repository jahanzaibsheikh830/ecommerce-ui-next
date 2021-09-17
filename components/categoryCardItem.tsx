import React, { useState } from "react";
import { CategoryCardData } from "../helperData/catergoryItem.helper";
import CategoryCard from "./categoryCard";
import Container from "./container";
import { IoMdArrowDropright } from "react-icons/Io";
import { HiTemplate } from "react-icons/Hi";
import styles from "../styles/components/categoryCardItem.module.scss";
export default function CategoryCardItem() {
  return (
    <div className={styles.categoryCardMain}>
      <Container>
        <div className={styles.salesHeader}>
          <div className={styles.salesHeading}>
            <div>
              <HiTemplate className={styles.salesIcon} size={25} />
            </div>
            <div>
              <h2> Top Categories</h2>
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

import React from "react";
import Image from "next/image";
import styles from "../../styles/components/categoryCard.module.scss";
import Button from "../button";
interface CategoriesData {
  cardData?: {
    image?: any;
    name?: string;
    status?: string;
  };
}
export default function CategoryCard({ cardData }: CategoriesData) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.categoryCardMain}>
        <div
          className={styles.categoryProduct}
          style={{
            backgroundImage: `url(${cardData?.image.src})`,
          }}
        >
          <div className={styles.categoryProductBtn}>
            <div>
              <Button text={cardData?.name} type={"categoryBtn"} />
            </div>
            <div>
              <Button text={cardData?.status} type={"statusBtn"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import styles from "../styles/components/card.module.scss";
import Button from "./button";
import {
  AiFillEye,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/Ai";
export default function Card({ salesData }: any) {
  const { image, title, price } = salesData;
  console.log(salesData);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div>
          <div className={styles.cardContentHeader}>
            <div>
              <Button text={"25% off"} />
            </div>
            <div className={styles.cardContentHeaderIcon}>
              <AiFillEye className={styles.eyeIcon} size={20} />
              <AiOutlineHeart className={styles.heartIcon} size={20} />
            </div>
          </div>
          <div className={styles.cardContentImg}>
            <Image
              // height={170}
              // width={170}
              src={image}
              alt={"sales product image"}
            />
          </div>
          <div className={styles.cardBottomContent}>
            <div>
              <h3>{title}</h3>
              <p className={styles.stars}>
                <AiFillStar size={20} className={styles.filledRating} />
                <AiFillStar size={20} className={styles.filledRating} />
                <AiFillStar size={20} className={styles.filledRating} />
                <AiFillStar size={20} className={styles.filledRating} />
                <AiOutlineStar size={20} className={styles.outlineRating} />
              </p>
              <p>
                <span className={styles.price}>${price}</span>
                <span className={styles.cutPrice}>350</span>
              </p>
            </div>
            <div className={styles.addToCartBtn}>
              <Button text={"add"} type={"cartBtn"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

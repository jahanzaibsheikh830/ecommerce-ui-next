import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/components/card.module.scss";
import Button from "../button";
import {
  AiFillEye,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
interface cardProps {
  salesData?: {
    image: any;
    title: string;
    price: number;
  };
}
export default function Card({ salesData }: cardProps) {
  const [value, setValue] = useState(0);
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
            <Image src={salesData?.image} alt={"sales product image"} />
          </div>
          <div className={styles.cardBottomContent}>
            <div>
              <h3>{salesData?.title}</h3>
              <p className={styles.stars}>
                <AiFillStar size={20} className={styles.filledRating} />
                <AiFillStar size={20} className={styles.filledRating} />
                <AiFillStar size={20} className={styles.filledRating} />
                <AiFillStar size={20} className={styles.filledRating} />
                <AiOutlineStar size={20} className={styles.outlineRating} />
              </p>
              <p>
                <span className={styles.price}>${salesData?.price}</span>
                <span className={styles.cutPrice}>350</span>
              </p>
            </div>
            <div className={styles.valueBtn}>
              {value !== 0 && (
                <>
                  <div
                    className={styles.addToCartBtn}
                    onClick={() => setValue(value - 1)}
                  >
                    <Button text={"inc"} type={"cartBtn"} color={"#d23f57"} />
                  </div>
                  <div className={styles.cartVal}>{value}</div>
                </>
              )}
              <div
                className={styles.addToCartBtn}
                onClick={() => setValue(value + 1)}
              >
                <Button text={"add"} type={"cartBtn"} color={"#d23f57"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import styles from "../../Styles/Components/Cards/RatingCard.module.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
interface ratingDataProps {
  ratingData: {
    ratings: number;
    title: string;
    price: number;
    image: any;
  };
}
export default function RatingCard({ ratingData }: ratingDataProps) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window?.innerWidth);
    }
  }, []);
  return (
    <div>
      <div className={styles.ratingCard}>
        <div className={styles.ratingCardImg}>
          <Image
            src={ratingData.image}
            alt='rating image'
            width={width > 1200 ? 110 : width > 900 ? 260 : 400}
            height={width > 1200 ? 110 : width > 900 ? 260 : 400}
            // width={110}
            // height={110}
          />
        </div>
        <div className={styles.ratings}>
          <AiFillStar size={18} className={styles.filledRating} />
          <AiFillStar size={18} className={styles.filledRating} />
          <AiFillStar size={18} className={styles.filledRating} />
          <AiFillStar size={18} className={styles.filledRating} />
          <AiFillStar size={18} className={styles.filledRating} />
          <span>({ratingData?.ratings})</span>
        </div>
        <div className={styles.title}>
          <p>{ratingData?.title}</p>
        </div>
        <div className={styles.price}>
          <p>${ratingData?.price}</p>
        </div>
      </div>
    </div>
  );
}

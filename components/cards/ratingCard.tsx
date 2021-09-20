import React from "react";
import styles from "../../styles//components/ratingCard.module.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/Ai";
import Image from "next/image";
interface ratingDataProps {
  ratingData: object;
}
export default function RatingCard({ ratingData }: ratingDataProps) {
  return (
    <div>
      <div className={styles.ratingCard}>
        <div className={styles.ratingCardImg}>
          <Image
            src={ratingData.image}
            alt='rating image'
            width={110}
            height={110}
          />
        </div>
        <div className={styles.ratings}>
          <AiFillStar size={18} className={styles.filledRating} />
          <AiFillStar size={18} className={styles.filledRating} />
          <AiFillStar size={18} className={styles.filledRating} />
          <AiFillStar size={18} className={styles.filledRating} />
          <AiFillStar size={18} className={styles.filledRating} />
          <span>({ratingData.ratings})</span>
        </div>
        <div className={styles.title}>
          <p>{ratingData.title}</p>
        </div>
        <div className={styles.price}>
          <p>${ratingData.price}</p>
        </div>
      </div>
    </div>
  );
}

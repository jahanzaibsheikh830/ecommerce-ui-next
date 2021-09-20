import React from "react";
import styles from "../../styles/components/featuredCard.module.scss";
import Image from "next/image";
interface FeaturedCardProps {
  featuredData: object;
  discount?: string;
}
export default function FeaturedCard({
  featuredData,
  discount,
}: FeaturedCardProps) {
  return (
    <div>
      <div className={discount ? styles.dicountMainCard : styles.mainCard}>
        <div>
          <Image
            className={styles.image}
            src={featuredData.image}
            alt='featued image'
            width={featuredData.price ? 300 : 280}
            height={featuredData.price ? 280 : 200}
          />
        </div>
        <div className={styles.title}>
          <h4>{featuredData.name}</h4>
        </div>
        <div className={styles.price}>
          <span>{featuredData.price}</span>

          {discount && (
            <span className={styles.cutPrice}>{featuredData.price}</span>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "../styles/components/featuredCard.module.scss";
import Image from "next/image";
interface FeaturedCardProps {
  featuredData: object;
}
export default function FeaturedCard({ featuredData }: FeaturedCardProps) {
  return (
    <div>
      <div>
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
          <p>{featuredData.price}</p>
        </div>
      </div>
    </div>
  );
}

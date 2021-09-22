import React from "react";
import Image from "next/image";
import styles from "../../styles/components/allCategory.module.scss";
interface CategoryProps {
  categoryData?: {
    icon?: any;
    name?: string;
  };
}
export default function AllCategoryCard({ categoryData }: CategoryProps) {
  return (
    <div>
      <div className={styles.categoryMain}>
        <div>
          <Image src={categoryData?.icon} alt='image' width={50} height={50} />
        </div>
        <div>
          <h4>{categoryData?.name}</h4>
        </div>
      </div>
    </div>
  );
}

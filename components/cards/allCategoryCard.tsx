import React from "react";
import Image from "next/image";
import styles from "../../styles/components/allCategory.module.scss";
interface CategoryProps {
  categoryData?: object;
}
export default function AllCategoryCard({ categoryData }: CategoryProps) {
  const { icon, name } = categoryData;
  console.log("categoryData", categoryData);
  return (
    <div>
      <div className={styles.categoryMain}>
        <div>
          <Image src={icon} alt='image' width={50} height={50} />
        </div>
        <div>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
}

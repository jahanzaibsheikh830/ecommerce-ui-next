import React from "react";
import styles from "../styles/components/productHeader.module.scss";
interface ProductHeaderProps {
  title?: string;
  TitleIcon?: any;
  LinkIcon?: any;
  linkTitle?: string;
  color?: string;
}
export default function ProductHeader({
  TitleIcon,
  title,
  LinkIcon,
  linkTitle,
  color,
}: ProductHeaderProps) {
  return (
    <div className={styles.productHeader}>
      <div className={styles.productHeading}>
        <div>
          {TitleIcon && (
            <TitleIcon className={styles.productIcon} size={25} color={color} />
          )}
        </div>
        <div>
          <h2>{title}</h2>
        </div>
      </div>
      <div className={styles.linkTitle}>
        <div>
          <p>{linkTitle}</p>
        </div>
        <div>
          {LinkIcon && <LinkIcon className={styles.linkIcon} size={20} />}
        </div>
      </div>
    </div>
  );
}

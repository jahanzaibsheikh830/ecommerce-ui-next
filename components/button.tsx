import React from "react";
import styles from "../styles/components/button.module.scss";
import { GrAdd } from "react-icons/Gr";
interface buttonProps {
  text?: string;
  type?: string;
}
export default function Button({ text, type }: buttonProps) {
  return (
    <div>
      <button
        className={
          type === "cartBtn"
            ? styles.cartBtn
            : type === "sliderShopBtn"
            ? styles.sliderShopBtn
            : type === "categoryBtn"
            ? styles.categoryBtn
            : type === "statusBtn"
            ? styles.statusBtn
            : styles.salesBtn
        }
      >
        {text == "add" ? <GrAdd size={12} className={styles.addBtn} /> : text}
      </button>
    </div>
  );
}

import React from "react";
import styles from "../styles/components/button.module.scss";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
interface buttonProps {
  text?: string;
  type?: string;
  color?: string;
}
export default function Button({ text, type, color }: buttonProps) {
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
        {text == "add" ? (
          <AiOutlinePlus
            size={12}
            className={styles.addBtn}
            color={"#d23f57"}
          />
        ) : text == "inc" ? (
          <AiOutlineMinus
            size={12}
            className={styles.addBtn}
            color={"#d23f57"}
          />
        ) : (
          text
        )}
      </button>
    </div>
  );
}

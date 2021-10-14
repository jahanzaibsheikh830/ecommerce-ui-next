import React from "react";
import styles from "../../Styles/Components/Shared/Button.module.scss";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
interface buttonProps {
  text?: string;
  type?: string;
  color?: string;
  qty?: number;
  onClick?: any;
  width?: string;
}
export default function Button({
  text,
  type,
  color,
  qty,
  onClick,
  width,
}: buttonProps) {
  return (
    <div>
      <button
        style={{ width: width }}
        onClick={onClick}
        disabled={qty == 1 ? true : false}
        type='button'
        className={
          type === "cartBtn"
            ? styles.cartBtn
            : type === "sliderShopBtn"
            ? styles.sliderShopBtn
            : type === "categoryBtn"
            ? styles.categoryBtn
            : type === "statusBtn"
            ? styles.statusBtn
            : type === "cartItemBtn"
            ? styles.cartItemBtn
            : type === "cartShopBtn"
            ? styles.cartShopBtn
            : type === "viewCartBtn"
            ? styles.viewCartBtn
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

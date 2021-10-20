import React from "react";
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
            ? "cartBtn"
            : type === "sliderShopBtn"
            ? "sliderShopBtn"
            : type === "categoryBtn"
            ? "categoryBtn"
            : type === "statusBtn"
            ? "statusBtn"
            : type === "cartItemBtn"
            ? "cartItemBtn"
            : type === "cartShopBtn"
            ? "cartShopBtn"
            : type === "viewCartBtn"
            ? "viewCartBtn"
            : "salesBtn"
        }
      >
        {text == "add" ? (
          <AiOutlinePlus size={12} className='addBtn' color={"#d23f57"} />
        ) : text == "inc" ? (
          <AiOutlineMinus size={12} className='addBtn' color={"#d23f57"} />
        ) : (
          text
        )}
      </button>
    </div>
  );
}

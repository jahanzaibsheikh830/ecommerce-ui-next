import React from "react";
import styles from "../styles/components/bottomNav.module.scss";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
export default function BottomNav() {
  return (
    <div>
      <div className={styles.bottomNavMain}>
        <div className={styles.col4}>
          <div>
            <AiOutlineHome size={20} color={"#515D60"} />
          </div>
          <div>
            <p>Home</p>
          </div>
        </div>
        <div className={styles.col4}>
          <div>
            <BsFillGridFill size={20} color={"#515D60"} />
          </div>
          <div>
            <p>Category</p>
          </div>
        </div>
        <div className={styles.col4}>
          <div>
            <AiOutlineShoppingCart size={20} color={"#515D60"} />
          </div>
          <div>
            <p>Cart</p>
          </div>
        </div>
        <div className={styles.col4}>
          <div>
            <AiOutlineUser size={20} color={"#515D60"} />
          </div>
          <div>
            <p>Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Image from "next/image";
import styles from "../../Styles/Components/Cards/Card.module.scss";
import Button from "../Shared/Button";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { cartItem } from "../../ReduxStore/Actions/CartAction";
import {
  AiFillEye,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineStar,
  AiFillHeart,
} from "react-icons/ai";
import { incItem, decItem } from "../../Libs/HelpersFunction";
import Modal from "../Shared/Modal";
interface cardProps {
  salesData?: {
    id: string;
    image: any;
    title: string;
    price: number;
  };
}
export default function Card({ salesData }: cardProps) {
  const [showModal, setShowModal] = useState(false);
  const [heartFill, setHeartFill] = useState<boolean>(false);
  const dispatch = useDispatch();
  const cartState = useSelector(
    (state: RootStateOrAny) => state?.CartReducers?.cartItems
  );
  const cartQty = cartState.find((itm) => itm.id === salesData?.id && itm.qty);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div>
          <div className={styles.cardContentHeader}>
            <div>
              <Button text={"25% off"} />
            </div>
            <div className={styles.cardContentHeaderIcon}>
              <AiFillEye
                className={styles.eyeIcon}
                size={20}
                onClick={() => setShowModal((prev) => !prev)}
              />
              {!heartFill ? (
                <AiOutlineHeart
                  color={"#0f3460"}
                  size={20}
                  onClick={() => setHeartFill((prev) => !prev)}
                />
              ) : (
                <AiFillHeart
                  color={"#d23f57"}
                  size={20}
                  onClick={() => setHeartFill((prev) => !prev)}
                />
              )}
            </div>
          </div>
          <div className={styles.cardContentImg}>
            <Image src={salesData?.image} alt={"sales product image"} />
          </div>
          <div className={styles.cardBottomContent}>
            <div>
              <h3>{salesData?.title}</h3>
              <p className={styles.stars}>
                <AiFillStar size={20} color={"#faaf00"} />
                <AiFillStar size={20} color={"#faaf00"} />
                <AiFillStar size={20} color={"#faaf00"} />
                <AiFillStar size={20} color={"#faaf00"} />
                <AiOutlineStar size={20} color={"rgba(0, 0, 0, 0.26)"} />
              </p>
              <p>
                <span className={styles.price}>${salesData?.price}</span>
                <span className={styles.cutPrice}>350</span>
              </p>
            </div>
            <div className={styles.valueBtn}>
              {cartQty?.qty && cartQty !== 0 && (
                <>
                  <div className={styles.addToCartBtn}>
                    <Button
                      text={"inc"}
                      type={"cartBtn"}
                      color={"#d23f57"}
                      onClick={() => decItem(dispatch, salesData, cartState)}
                    />
                  </div>
                  <div className={styles.cartVal}>{cartQty?.qty}</div>
                </>
              )}
              <div className={styles.addToCartBtn}>
                <Button
                  text={"add"}
                  type={"cartBtn"}
                  color={"#d23f57"}
                  onClick={() => incItem(dispatch, salesData, cartState)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          modalData={salesData}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

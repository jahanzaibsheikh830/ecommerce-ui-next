import React from "react";
import styles from "../../Styles/Components/Shared/Modal.module.scss";
import img from "../assests/bikeImg2.webp";
import Image from "next/image";
import Button from "./Button";
import { MdClear } from "react-icons/md";
import { slidesData } from "../../HelperData/Slider.helper";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { incItem, decItem } from "../../Lib/HelperFunction";

interface modalProps {
  modalData?: {
    id: string;
    image: any;
    title: string;
    price: number;
  };
  showModal?: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Modal({
  modalData,
  setShowModal,
  showModal,
}: modalProps) {
  const cartState = useSelector(
    (state: RootStateOrAny) => state?.CartReducers?.cartItems
  );
  const dispatch = useDispatch();
  const cartQty = cartState.find((itm) => itm.id === modalData?.id && itm.qty);

  return (
    <div
      className={styles.mainContainer}
      onClick={() => setShowModal((prev) => !prev)}
    >
      <div className={styles.modalMain}>
        <div className={styles.modal} onClick={() => setShowModal(false)}>
          <div className={styles.modalLeft}>
            <div className={styles.modalImg}>
              <Image
                src={modalData?.image}
                alt={"fsfsf"}
                width={200}
                height={200}
              />
            </div>
            <div className={styles.modalImgView}>
              <Image
                src={modalData?.image}
                alt={"fsfsf"}
                width={70}
                height={70}
              />
            </div>
          </div>
          <div className={styles.modalRight}>
            <span>
              <MdClear
                size={20}
                className={styles.modalClosed}
                onClick={() => setShowModal(true)}
              />
            </span>
            <h4 className={styles.modalTitle}>{modalData?.title}</h4>
            <p className={styles.modalBrandName}>
              Brand:<span>{modalData?.title}</span>
            </p>
            <p className={styles.modalRating}>
              Rated:<span>*******</span>
            </p>
            <h4 className={styles.modalPrice}>${modalData?.price}</h4>
            <p className={styles.modalStock}>stock available</p>
            {(cartQty?.qty[0] && cartQty == 0) || cartQty == undefined ? (
              <Button
                text='Add to Cart'
                type='sliderShopBtn'
                onClick={() => incItem(dispatch, modalData, cartState)}
              />
            ) : (
              <div className={styles.cartBtn}>
                <div>
                  <Button
                    text={"inc"}
                    type={"cartBtn"}
                    color={"#d23f57"}
                    onClick={() => decItem(dispatch, modalData, cartState)}
                  />
                </div>
                <div>{cartQty?.qty}</div>
                <div>
                  <Button
                    text={"add"}
                    type={"cartBtn"}
                    color={"#d23f57"}
                    onClick={() => incItem(dispatch, modalData, cartState)}
                  />
                </div>
              </div>
            )}
            <p className={styles.modalSoldBy}>
              Sold By:<span>Mobile Store</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "../../Styles/Components/Shared/Modal.module.scss";
import img from "../assests/bikeImg2.webp";
import Image from "next/image";
import Button from "./Button";
import { MdClear } from "react-icons/md";
import { slidesData } from "../../HelpersData/Slider.helper";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { incItem, decItem } from "../../Libs/HelpersFunction";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import SocialButton from "./SocialButton";
interface modalProps {
  modalData?: {
    id: string;
    image: any;
    title: string;
    price: number;
  };
  showModal?: boolean;
  login?: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Modal({
  modalData,
  setShowModal,
  showModal,
  login,
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
          {!login ? (
            <>
              <div className={styles.modalLeft}>
                <div className={styles.modalImg}>
                  <Image
                    src={modalData?.image}
                    alt={"fsfsf"}
                    width={230}
                    height={230}
                  />
                </div>
                <div className={styles.modalImgView}>
                  <Image
                    src={modalData?.image}
                    alt={"fsfsf"}
                    width={50}
                    height={50}
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
                  Rated:
                  <span>
                    <AiFillStar size={20} color={"#faaf00"} />
                    <AiFillStar size={20} color={"#faaf00"} />
                    <AiFillStar size={20} color={"#faaf00"} />
                    <AiFillStar size={20} color={"#faaf00"} />
                    <AiOutlineStar size={20} color={"rgba(0, 0, 0, 0.26)"} />
                  </span>
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
            </>
          ) : (
            <div className={styles.modalLogin}>
              <div>
                <h3>Welcome To Ecommerce</h3>
                <p>Log in with email &amp; password</p>
                <div>
                  <form>
                    <div className={styles.loginForm}>
                      <div>
                        <label>Email or Phone Number</label>
                        <input type='text' placeholder='example@mail.com' />
                      </div>
                      <div>
                        <label>Password</label>
                        <input type='password' placeholder='*********' />
                      </div>
                      <div className={styles.loginBtn}>
                        <Button
                          text='Login'
                          type='sliderShopBtn'
                          width={"100%"}
                        />
                      </div>
                    </div>
                    <div className={styles.dividerMain}>
                      <div className={styles.divider}>or</div>
                    </div>
                    <div className={styles.socialLogin}>
                      <div>
                        <SocialButton
                          name='continue with facebook'
                          provider={"fb"}
                        />
                      </div>
                      <div>
                        <SocialButton
                          name='continue with google'
                          provider={"google"}
                        />
                      </div>
                    </div>
                    <div className={styles.linkRoute}>
                      <p>
                        Don’t have account? <span>Sign Up</span>{" "}
                      </p>
                    </div>
                    <div className={styles.modalBottom}>
                      <p>
                        Forgot your password?
                        <span>Reset It</span>{" "}
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

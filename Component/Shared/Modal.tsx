import React from "react";
import img from "../assests/bikeImg2.webp";
import Image from "next/image";
import Button from "./Button";
import { MdClear } from "react-icons/md";
import { slidesData } from "../../HelpersData/Slider.helper";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { incItem, decItem } from "../../Libs/HelpersFunction";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { modal } from "../../ReduxStore/Actions/ModalAction";
import SocialButton from "./SocialButton";
import Link from "next/link";
interface modalProps {
  modalData?: {
    id: string;
    image: any;
    title: string;
    price: number;
  };
  showModal?: boolean;
  login?: boolean;
}
export default function Modal({ modalData, showModal, login }: modalProps) {
  const cartState = useSelector(
    (state: RootStateOrAny) => state?.CartReducers?.cartItems
  );
  const modalState = useSelector(
    (state: RootStateOrAny) => state?.ModalReducer
  );
  console.log("modalState md", modalState.isLoginModal);
  const dispatch = useDispatch();
  const cartQty = cartState.find((itm) => itm.id === modalData?.id && itm.qty);

  return (
    <div
      className='mainContainerModal'
      onClick={() =>
        dispatch(
          modal({
            showModal: false,
            modalData: {},
            isLoginModal: false,
          })
        )
      }
    >
      <div className='modalMain'>
        <div
          className='modal'
          onClick={() =>
            dispatch(
              modal({
                showModal: true,
              })
            )
          }
        >
          {modalState?.isLoginModal ? (
            <div className='modalLogin'>
              <div>
                <h3>Welcome To Ecommerce</h3>
                <p>Log in with email &amp; password</p>
                <div>
                  <form>
                    <div className='loginForm'>
                      <div>
                        <label>Email or Phone Number</label>
                        <input type='text' placeholder='example@mail.com' />
                      </div>
                      <div>
                        <label>Password</label>
                        <input type='password' placeholder='*********' />
                      </div>
                      <div className='loginBtn'>
                        <Button
                          text='Login'
                          type='sliderShopBtn'
                          width={"100%"}
                        />
                      </div>
                    </div>
                    <div className='dividerMain'>
                      <div className='divider'>or</div>
                    </div>
                    <div className='socialLogin'>
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
                    <div className='linkRoute'>
                      <p>
                        Don’t have account?{" "}
                        <span>
                          <Link href='/signup' passHref>
                            Signup
                          </Link>{" "}
                        </span>{" "}
                      </p>
                    </div>
                    <div className='modalBottom'>
                      <p>
                        Forgot your password?
                        <span>Reset It</span>{" "}
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className='modalLeft'>
                <div className='modalImg'>
                  {modalData && (
                    <Image
                      src={modalData?.image}
                      alt={"fsfsf"}
                      width='230PX'
                      height='230PX'
                    />
                  )}
                </div>
                <div className='modalImgView'>
                  <Image
                    src={modalData?.image}
                    alt={"fsfsf"}
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className='modalRight'>
                <span>
                  <MdClear size={20} className='modalClosed' />
                </span>
                <h4 className='modalTitle'>{modalData?.title}</h4>
                <p className='modalBrandName'>
                  Brand:<span>{modalData?.title}</span>
                </p>
                <p className='modalRating'>
                  Rated:
                  <span>
                    <AiFillStar size={20} color={"#faaf00"} />
                    <AiFillStar size={20} color={"#faaf00"} />
                    <AiFillStar size={20} color={"#faaf00"} />
                    <AiFillStar size={20} color={"#faaf00"} />
                    <AiOutlineStar size={20} color={"rgba(0, 0, 0, 0.26)"} />
                  </span>
                </p>
                <h4 className='modalPrice'>${modalData?.price}</h4>
                <p className='modalStock'>stock available</p>
                {(cartQty?.qty[0] && cartQty == 0) || cartQty == undefined ? (
                  <Button
                    text='Add to Cart'
                    type='sliderShopBtn'
                    onClick={() => incItem(dispatch, modalData, cartState)}
                  />
                ) : (
                  <div className='cartBtnMain'>
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
                <p className='modalSoldBy'>
                  Sold By:<span>Mobile Store</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

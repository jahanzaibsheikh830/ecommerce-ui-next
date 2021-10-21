import React from "react";
import Image from "next/image";
import Button from "./Button";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { incItem, decItem } from "../../Libs/HelpersFunction";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import im from "../../assests/bikeImg2.webp";
import Container from "./Container";
export default function SingleProduct({ modalData }) {
  const dispatch = useDispatch();
  const cartState = useSelector(
    (state: RootStateOrAny) => state?.CartReducers?.cartItems
  );
  const cartQty = cartState.find((itm) => itm.id === modalData?.id && itm.qty);
  console.log(modalData);
  return (
    <div className='singleProductMain'>
      <Container>
        <div className='singleProduct'>
          <div className='singleProductLeft'>
            <div className='productImg'>
              <Image src={im} alt={"fsfsf"} width={400} height={400} />
            </div>
            <div className='productImgView'>
              <div>
                <Image src={im} alt={"fsfsf"} width={50} height={50} />
              </div>
              <div>
                <Image src={im} alt={"fsfsf"} width={50} height={50} />
              </div>
              <div>
                <Image src={im} alt={"fsfsf"} width={50} height={50} />
              </div>
            </div>
          </div>
          <div className='singleProductRight'>
            <div>
              <h4 className='productTitle'>{modalData?.title}</h4>
              <p className='productBrandName'>
                Brand:<span>Ford</span>
              </p>
              <p className='productRating'>
                Rated:
                <span>
                  <AiFillStar size={20} color={"#faaf00"} />
                  <AiFillStar size={20} color={"#faaf00"} />
                  <AiFillStar size={20} color={"#faaf00"} />
                  <AiFillStar size={20} color={"#faaf00"} />
                  <AiOutlineStar size={20} color={"rgba(0, 0, 0, 0.26)"} />
                </span>
              </p>
              <h4 className='productPrice'>${modalData?.price}</h4>
              <p className='productStock'>stock available</p>
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
              <p className='productSoldBy'>
                Sold By:<span>Mobile Store</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

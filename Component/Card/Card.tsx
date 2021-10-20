import React, { useState } from "react";
import Image from "next/image";
import Button from "../Shared/Button";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { modal } from "../../ReduxStore/Actions/ModalAction";
import {
  AiFillEye,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineStar,
  AiFillHeart,
} from "react-icons/ai";
import { incItem, decItem } from "../../Libs/HelpersFunction";
import Modal from "../Shared/Modal";
import Link from "next/link";
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
    <div className='cardContainer'>
      <div className='card'>
        <div>
          <div className='cardContentHeader'>
            <div>
              <Button text='25% off' />
            </div>
            <div className='cardContentHeaderIcon'>
              <AiFillEye
                className='eyeIcon'
                size={20}
                onClick={() =>
                  dispatch(
                    modal({
                      modalData: salesData,
                      showModal: true,
                    })
                  )
                }
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
          <div className='cardContentImg'>
            <Link
              passHref
              href={{
                pathname: `product/[index]`,
                query: salesData,
              }}
              as={`product/${salesData?.id}`}
            >
              <Image src={salesData?.image} alt={"sales product image"} />
            </Link>
          </div>
          <div className='cardBottomContent'>
            <div>
              <h3>{salesData?.title}</h3>
              <p className='stars'>
                <AiFillStar size={20} color={"#faaf00"} />
                <AiFillStar size={20} color={"#faaf00"} />
                <AiFillStar size={20} color={"#faaf00"} />
                <AiFillStar size={20} color={"#faaf00"} />
                <AiOutlineStar size={20} color={"rgba(0, 0, 0, 0.26)"} />
              </p>
              <p>
                <span className='price'>${salesData?.price}</span>
                <span className='cutPrice'>350</span>
              </p>
            </div>
            <div className='valueBtn'>
              {cartQty?.qty && cartQty !== 0 && (
                <>
                  <div className='addToCartBtn'>
                    <Button
                      text={"inc"}
                      type={"cartBtn"}
                      color={"#d23f57"}
                      onClick={() => decItem(dispatch, salesData, cartState)}
                    />
                  </div>
                  <div className='cartVal'>{cartQty?.qty}</div>
                </>
              )}
              <div className='addToCartBtn'>
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
    </div>
  );
}

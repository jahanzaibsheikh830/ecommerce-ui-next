import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Button from "./Button";
import shoppingBag from "../../assests/shopping-bag.svg";
import Image from "next/image";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { MdClear } from "react-icons/md";
import { incItem, decItem, removeItem } from "../../Libs/HelpersFunction";
export default function Basket({ showBasket, setShowBasket }) {
  const cartState = useSelector(
    (state: RootStateOrAny) => state?.CartReducers?.cartItems
  );
  const totalPrice = cartState.reduce((a, c) => a + c.qty * c.price, 0);
  const dispatch = useDispatch();
  return (
    <div className={showBasket ? "basketMain" : "basketMainNone"}>
      <div className='basket' onClick={() => setShowBasket((prev) => !prev)}>
        <div className='cartMain' onClick={() => setShowBasket(false)}>
          <div className='cartHeader'>
            <span>
              <AiOutlineShopping size={23} />
            </span>
            <span>{cartState?.length} Item</span>
          </div>
          <hr className='cartLine' />
          {cartState.length === 0 ? (
            <div className='ifNotItems'>
              <div>
                <Image
                  src={shoppingBag}
                  alt='shopping bag'
                  width={100}
                  height={100}
                />
                <p>Your shopping bag is empty. Start shopping</p>
              </div>
            </div>
          ) : (
            <>
              <div className='cartItemsMain'>
                {cartState.map((item, index) => {
                  return (
                    <div className='cartItems' key={index}>
                      <div className='itemBtns'>
                        <span>
                          <Button
                            text={"add"}
                            type={"cartItemBtn"}
                            color={"#d23f57"}
                            onClick={() => incItem(dispatch, item, cartState)}
                          />
                        </span>
                        <span>{item.qty}</span>
                        <span>
                          <Button
                            text={"inc"}
                            type={"cartItemBtn"}
                            color={"#d23f57"}
                            qty={item.qty}
                            onClick={(e) => decItem(dispatch, item, cartState)}
                          />
                        </span>
                      </div>
                      <div className='itemImg'>
                        {/* <Image
                          width={80}
                          height={80}
                          src={item?.image}
                          alt='items image'
                        /> */}
                      </div>
                      <div className='itemDetails'>
                        <h4>{item.title}</h4>
                        <span>
                          ${item.price} x {item.qty}
                        </span>
                        <p>${item.price * item.qty}</p>
                      </div>
                      <div className='itemCancel'>
                        <MdClear
                          size={20}
                          onClick={() => removeItem(dispatch, item, cartState)}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className='btnMain'>
                <Button
                  text={`Checkout Now ($${totalPrice})`}
                  type='cartShopBtn'
                />
                <Button text='view cart' type='viewCartBtn' />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

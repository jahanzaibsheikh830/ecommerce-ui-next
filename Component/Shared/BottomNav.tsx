import React from "react";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import { useSelector, RootStateOrAny } from "react-redux";
import Link from "next/link";
export default function BottomNav() {
  const cartState = useSelector(
    (state: RootStateOrAny) => state?.CartReducers?.cartItems
  );
  return (
    <div>
      <div className='bottomNavMain'>
        <div className='col4'>
          <div>
            <AiOutlineHome size={20} color={"#515D60"} />
          </div>
          <div>
            <p>Home</p>
          </div>
        </div>
        <div className='col4'>
          <div>
            <BsFillGridFill size={20} color={"#515D60"} />
          </div>
          <div>
            <p>Category</p>
          </div>
        </div>
        <div className='col4'>
          <div>
            <AiOutlineShoppingCart size={20} color={"#515D60"} />
          </div>
          <div>
            <p>Cart</p>
          </div>
          <div className='cartQuantity'>
            <span>{cartState.length}</span>
          </div>
        </div>
        <div className='col4'>
          <div>
            <AiOutlineUser size={20} color={"#515D60"} />
          </div>
          <div>
            <p>
              <Link href='/profile' passHref>
                Account
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

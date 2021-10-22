import React from "react";
import UserHeader from "./UserHeader";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { orders } from "../../HelpersData/Order.helper";
import { phonesCardData } from "../../HelpersData/PhoneCardItems.helper";
import Card from "../../Component/Card/Card";
export default function Wishlist() {
  return (
    <div className='ordersMain'>
      <UserHeader
        title='My Wish List'
        Icon={AiTwotoneHeart}
        iconSize='25'
        buttonText='add all to cart'
      />
      <div>
        <div className='wishList'>
          {phonesCardData.map((val, ind) => {
            return <Card salesData={val} key={ind} />;
          })}
        </div>
      </div>
    </div>
  );
}

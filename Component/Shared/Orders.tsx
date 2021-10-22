import React from "react";
import UserHeader from "./UserHeader";
import { FaShoppingBag } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { orders } from "../../HelpersData/Order.helper";
export default function Orders() {
  return (
    <div className='ordersMain'>
      <UserHeader title='my orders' Icon={FaShoppingBag} iconSize='20' />
      <div>
        <div className='ordersMainHeader'>
          <p>Order #</p>
          <p>Status</p>
          <p>Date purchased</p>
          <p>Total</p>
          <p></p>
        </div>
        <div className='orders'>
          {orders.map((val, ind) => {
            return (
              <div key={ind} className='ordersDetail'>
                <div>
                  <h4>{val.orderNo}</h4>
                </div>
                <div className={`${"status"} `}>
                  <p
                    className={`${
                      val.status === "pending"
                        ? "pending"
                        : val.status === "delivered"
                        ? "delivered"
                        : val.status === "cancelled"
                        ? "cancelled"
                        : "pending"
                    }`}
                  >
                    {val.status}
                  </p>
                </div>
                <div className='date'>
                  <p>{val.datePurchased}</p>
                </div>
                <div className='total'>
                  <p>${val.total}</p>
                </div>
                <div>
                  <p>
                    <BsArrowRight cursor='pointer' size='20' />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

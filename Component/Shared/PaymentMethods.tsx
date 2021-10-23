import React from "react";
import UserHeader from "./UserHeader";
import { GiHeadphones } from "react-icons/gi";
import { MdPayment } from "react-icons/md";

import { BsArrowRight } from "react-icons/bs";
import profilePic from "../../assests/profilePic.png";
import Image from "next/image";
import { paymentMethod } from "../../HelpersData/PaymentMethod.helper";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function PaymentMethods() {
  return (
    <div>
      <div className='paymentMain'>
        <UserHeader
          title='payment method'
          Icon={MdPayment}
          iconSize='25'
          buttonText='Add New Payment Method'
        />
        <div>
          {paymentMethod.map((value, i) => {
            return (
              <div key={i} className='payment'>
                <div className='paymentImage'>
                  <Image
                    src={value.image}
                    alt={"image"}
                    width='40'
                    height='40'
                  />
                  <span>{value.name}</span>
                </div>
                <div>
                  <p>{value.cardNo}</p>
                </div>
                <div>
                  <p>{value.date}</p>
                </div>
                <div className='action'>
                  <AiFillEdit
                    cursor='pointer'
                    size='20'
                    color='#707070'
                    className='editIcon'
                  />
                  <AiFillDelete cursor='pointer' size='20' color='#707070' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

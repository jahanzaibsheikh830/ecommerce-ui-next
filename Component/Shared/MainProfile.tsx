import React from "react";
import UserHeader from "./UserHeader";
import { FaUserAlt } from "react-icons/fa";
import profilePic from "../../assests/profilePic.png";
import Image from "next/image";
export default function MainProfile() {
  return (
    <div>
      <div className='userProfileMain'>
        <UserHeader
          buttonText='Edit Profile'
          title='My Profile'
          Icon={FaUserAlt}
        />
        <div className='userInfoMain'>
          <div className='userInfo'>
            <div className='userInfoDetail'>
              <div>
                <div>
                  <Image
                    src={profilePic}
                    alt='profilePic'
                    width='65'
                    height='65'
                  />
                </div>
                <div className='userDetails'>
                  <p className='userName'>Ralph Edwards</p>
                  <p className='userbalance'>
                    Balance: <span>$500</span>{" "}
                  </p>
                </div>
              </div>
              <div className='userBatch'> SILVER USER</div>
            </div>
          </div>
          <div className='orderDetails'>
            <div className='orderDetail'>
              <p className='qty'>16</p>
              <p className='qtyDesc'>All Orders</p>
            </div>
            <div className='orderDetail'>
              <p className='qty'>02</p>
              <p className='qtyDesc'>Awaiting Payments</p>
            </div>
            <div className='orderDetail'>
              <p className='qty'>00</p>
              <p className='qtyDesc'>Awaiting Shipment</p>
            </div>
            <div className='orderDetail'>
              <p className='qty'>01</p>
              <p className='qtyDesc'>Awaiting Delivery</p>
            </div>
          </div>
        </div>
      </div>
      <div className='userProfileInfoMain'>
        <div>
          <p className='title'>First Name</p>
          <p className='desc'>Ralph</p>
        </div>
        <div>
          <p className='title'>Last Name</p>
          <p className='desc'>Edwards</p>
        </div>
        <div>
          <p className='title'>Email</p>
          <p className='desc'>ralfedwards@email.com</p>
        </div>
        <div>
          <p className='title'>Phone</p>
          <p className='desc'>+1983649392983</p>
        </div>
        <div>
          <p className='title'>Birth date</p>
          <p className='desc'>01 Jan, 1970</p>
        </div>
      </div>
    </div>
  );
}

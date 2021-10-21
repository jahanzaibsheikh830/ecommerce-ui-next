import React from "react";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import { GiHeadphones } from "react-icons/gi";
import { FaUserAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import Link from "next/link";
export default function ProfileSideBar() {
  return (
    <div>
      <div className='profileSideBar'>
        <div className='sideBarCol'>
          <h3>Dashboard</h3>
          <div className='sideBarColItem'>
            <div>
              <span>
                <AiOutlineShopping color='rgb(125, 135, 156)' size='20' />
              </span>
              <span>Orders</span>
            </div>
            <span>5</span>
          </div>
          <div className='sideBarColItem'>
            <div>
              <span>
                <AiOutlineHeart color='rgb(125, 135, 156)' size='20' />
              </span>
              <span>Wishlist</span>
            </div>
            <span>19</span>
          </div>
          <div className='sideBarColItem'>
            <div>
              <span>
                <GiHeadphones color='rgb(125, 135, 156)' size='20' />
              </span>
              <span>Support Tickets</span>
            </div>
            <span>1</span>
          </div>
        </div>
        <div className='sideBarCol'>
          <h3>Account Settings</h3>
          <div className='sideBarColItem'>
            <div>
              <span>
                <FaUserAlt color='rgb(125, 135, 156)' size='13' />
              </span>
              <span>
                <Link href='/profile/order'>Profile info</Link>{" "}
              </span>
            </div>
            <span>3</span>
          </div>
          <div className='sideBarColItem'>
            <div>
              <span>
                <FaMapMarkerAlt color='rgb(125, 135, 156)' size='15' />
              </span>
              <span>Addressess</span>
            </div>
            <span>16</span>
          </div>
          <div className='sideBarColItem'>
            <div>
              <span>
                <MdPayment color='rgb(125, 135, 156)' size='20' />
              </span>
              <span>Payment Method</span>
            </div>
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  );
}

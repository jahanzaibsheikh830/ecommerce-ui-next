import React, { useState, useEffect } from "react";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import { GiHeadphones } from "react-icons/gi";
import { FaUserAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/router";
import { UseWindowSize } from "../../Hooks/UseWidth";
export default function ProfileSideBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const router = useRouter();
  const path = router.query.index;
  const customWindow = UseWindowSize();
  useEffect(() => {
    if (customWindow?.width > 900) {
      setShowSideBar(false);
    }
  }, [customWindow?.width]);
  return (
    <div>
      {customWindow?.width < 900 && (
        <div
          className='hamburger'
          onClick={() => setShowSideBar((prev) => !prev)}
        >
          <GiHamburgerMenu
            color='rgb(15, 52, 96);'
            size='17'
            cursor='pointer'
          />
        </div>
      )}
      <div
        onClick={() => setShowSideBar((prev) => !prev)}
        className={`${
          !showSideBar && customWindow?.width > 900
            ? "profileSideBarMainContainer"
            : showSideBar && customWindow?.width < 900
            ? "profileSideBarMainContainer"
            : "setShowSideBarNone"
        }`}
      >
        <div className='profileSideBarMain'>
          <div className='profileSideBar' onClick={() => setShowSideBar(false)}>
            <div className='sideBarCol'>
              <h3>Dashboard</h3>
              <Link href='/dashboard/orders' passHref>
                <div
                  onClick={() => setShowSideBar((prev) => !prev)}
                  className={`${"sideBarColItem"} ${
                    path === "orders" && "active"
                  }`}
                >
                  <div>
                    <span>
                      <AiOutlineShopping color='rgb(125, 135, 156)' size='20' />
                    </span>
                    <span>Orders</span>
                  </div>
                  <span className='qty'>5</span>
                </div>
              </Link>
              <Link href='/dashboard/wishlist' passHref>
                <div
                  className={`${"sideBarColItem"} ${
                    path === "wishlist" && "active"
                  }`}
                >
                  <div>
                    <span>
                      <AiOutlineHeart color='rgb(125, 135, 156)' size='20' />
                    </span>
                    <span>Wishlist</span>
                  </div>
                  <span className='qty'>19</span>
                </div>
              </Link>
              <Link href='/dashboard/support-tickets' passHref>
                <div
                  className={`${"sideBarColItem"} ${
                    path === "support-tickets" && "active"
                  }`}
                >
                  <div>
                    <span>
                      <GiHeadphones color='rgb(125, 135, 156)' size='20' />
                    </span>
                    <span>Support Tickets</span>
                  </div>
                  <span className='qty'>1</span>
                </div>
              </Link>
            </div>
            <div className='sideBarCol'>
              <h3>Account Settings</h3>
              <Link href='/dashboard/profile' passHref>
                <div
                  className={`${"sideBarColItem"} ${
                    path === "profile" && "active"
                  }`}
                >
                  <div>
                    <span>
                      <FaUserAlt color='rgb(125, 135, 156)' size='13' />
                    </span>
                    <span>Profile info</span>
                  </div>
                  <span className='qty'>3</span>
                </div>
              </Link>{" "}
              <Link href='/dashboard/addresses' passHref>
                <div
                  className={`${"sideBarColItem"} ${
                    path === "addresses" && "active"
                  }`}
                >
                  <div>
                    <span>
                      <FaMapMarkerAlt color='rgb(125, 135, 156)' size='15' />
                    </span>
                    <span> Addresses</span>
                  </div>
                  <span className='qty'>16</span>
                </div>
              </Link>{" "}
              <Link href='/dashboard/payment-method' passHref>
                <div
                  className={`${"sideBarColItem"} ${
                    path === "payment-method" && "active"
                  }`}
                >
                  <div>
                    <span>
                      <MdPayment color='rgb(125, 135, 156)' size='20' />
                    </span>
                    <span>Payment Method</span>
                  </div>
                  <span className='qty'>4</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

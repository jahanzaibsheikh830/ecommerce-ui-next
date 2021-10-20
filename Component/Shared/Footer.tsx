import React from "react";
import Container from "./Container";
import logo from "../../assests/logo.svg";
import Image from "next/image";
import googlePng from "../../assests/google.png";
import appStore from "../../assests/appstore.png";
import { FaFacebookF } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import {
  AiOutlineYoutube,
  AiOutlineGoogle,
  AiOutlineInstagram,
} from "react-icons/ai";
export default function Footer() {
  return (
    <div className='footerMain'>
      <Container>
        <div className='footerCol4'>
          <div className='footerCol_1'>
            <Image src={logo} alt='logo' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className='googleAndAppStore'>
              <div className='googlePlay'>
                <div>
                  <Image
                    src={googlePng}
                    alt='google play logo'
                    width={65}
                    height={45}
                  />
                </div>
                <div>
                  <p>Get it on</p>
                  <h4>Google Play</h4>
                </div>
              </div>
              <div className='googlePlay'>
                <div className='appStoreImg'>
                  <Image
                    src={appStore}
                    alt='app store logo'
                    width={25}
                    height={25}
                  />
                </div>
                <div>
                  <p>Download on the</p>
                  <h4>App Store</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='footerCol_2'>
            <h4>About Us</h4>
            <ul>
              <li>Career</li>
              <li>Our Stories</li>
              <li>Our Cares</li>
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='footerCol_3'>
            <h4>Customer Care</h4>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate &amp; Bulk Purchasing</li>
              <li>Returns &amp; Refunds</li>
            </ul>
          </div>
          <div className='footerCol_4'>
            <h4>Conatct Us</h4>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, United States
              </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
            <div className='socialIcons'>
              <p>
                <FaFacebookF />
              </p>
              <p>
                <CgTwitter />
              </p>
              <p>
                <AiOutlineYoutube />
              </p>
              <p>
                <AiOutlineGoogle />
              </p>
              <p>
                <AiOutlineInstagram />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

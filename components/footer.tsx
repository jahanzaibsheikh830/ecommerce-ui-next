import React from "react";
import Container from "./container";
import styles from "../styles/components/footer.module.scss";
import logo from "../assests/logo.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <div className={styles.footerMain}>
      <Container>
        <div className={styles.footerCol4}>
          <div className={styles.footerCol_1}>
            <Image src={logo} alt='logo' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
          </div>
          <div className={styles.footerCol_2}>
            <h4>About Us</h4>
            <ul>
              <li>Career</li>
              <li>Our Stories</li>
              <li>Our Cares</li>
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className={styles.footerCol_3}>
            <h4>Customer Care</h4>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate &amp; Bulk Purchasing</li>
              <li>Returns &amp; Refunds</li>
            </ul>
          </div>
          <div className={styles.footerCol_4}>
            <h4>Conatct Us</h4>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, United States
              </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

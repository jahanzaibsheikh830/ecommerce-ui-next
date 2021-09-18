import React from "react";
import Container from "./container";
import styles from "../styles/components/banner.module.scss";
import banner1 from "../assests/banner1.webp";
import banner2 from "../assests/banner2.webp";
import Image from "next/image";
export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <Container>
        <div className={styles.bannerMain}>
          <div>
            <Image src={banner1} alt='banner' height={320} />
          </div>
          <div>
            <Image src={banner2} alt='banner' height={320} width={780} />
          </div>
        </div>
      </Container>
    </div>
  );
}

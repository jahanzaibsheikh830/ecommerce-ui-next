import React from "react";
import Container from "./Container";
import banner1 from "../../assests/banner1.webp";
import banner2 from "../../assests/banner2.webp";
import Image from "next/image";
export default function Banner() {
  return (
    <div className='bannerContainer'>
      <Container>
        <div className='bannerMain'>
          <div className='bannerImg1'>
            <Image src={banner1} alt='banner' height={340} />
          </div>
          <div className='bannerImg2'>
            <Image src={banner2} alt='banner' height={340} width={780} />
          </div>
        </div>
      </Container>
    </div>
  );
}

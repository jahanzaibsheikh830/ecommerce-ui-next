import React from "react";
import Container from "../Shared/Container";
import Image from "next/image";
interface slideDataProps {
  slideData?: {
    title?: string;
    description?: string;
    button?: any;
    image?: StaticImageData;
  };
}

export default function sliderItem({ slideData }: slideDataProps) {
  return (
    <div>
      {/* <Container> */}
      <div className='sliderMain'>
        <div className='sliderContent'>
          <div>
            <h2>{slideData?.title}</h2>
            <p>{slideData?.description}</p>
            {slideData?.button}
          </div>
        </div>
        <div>
          <img src={slideData?.image?.src} alt='slider images' />
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
}

import React from "react";
import Container from "../Shared/Container";
import styles from "../../Styles/Components/Shared/Slider.module.scss";
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
    <div style={{ padding: "30px 0" }}>
      <Container>
        <div className={styles.sliderMain}>
          <div className={styles.sliderContent}>
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
      </Container>
    </div>
  );
}

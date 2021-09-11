import React from "react";
import Container from "./container";
import styles from "../styles/components/slider.module.scss"
import Image from "next/image"
interface slideDataProps {
  slideData?: object;
}
export default function sliderItem({ slideData }) {
  console.log("slideData:", slideData )
    return (
    <div>
      <Container>
          <div className={styles.sliderMain}>
            <div>
                <div>
                    <h2>{slideData.title}</h2>
                    <p>{slideData.description}</p>
                    {slideData.button}
                </div>
            </div>
            <div>
                <img src={slideData.image.src} alt="slider images"/>
            </div>
          </div>
      </Container>
    </div>
  );
}

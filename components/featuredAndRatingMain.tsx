import React from "react";
import Container from "./container";
import RatingCardItem from "./ratingCardItem";
import FeaturedCardItem from "./featuredCardItem";
import styles from "../styles/components/featuredAndRatingMain.module.scss";
export default function FeaturedAndRatingMain() {
  console.log("Featured", RatingCardItem);
  return (
    <div style={{ backgroundColor: "#f6f9fc" }}>
      <Container>
        <div className={styles.featuredAndRatingMain}>
          <div>
            <RatingCardItem />
          </div>
          <div>
            <FeaturedCardItem />
          </div>
        </div>
      </Container>
    </div>
  );
}

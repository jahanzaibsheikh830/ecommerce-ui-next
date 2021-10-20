import React from "react";
import Container from "../Shared/Container";
import RatingCardItem from "./RatingCardItem";
import FeaturedCardItem from "./FeaturedCardItem";
export default function FeaturedAndRatingMain() {
  return (
    <div style={{ backgroundColor: "#f6f9fc" }}>
      <Container>
        <div className='featuredAndRatingMain'>
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

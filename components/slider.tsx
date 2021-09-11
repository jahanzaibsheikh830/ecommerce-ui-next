import React, { useState } from "react";
import { slidesData } from "../helperData/slider.helper";
import SliderItem from "./sliderItem";
export default function Slider() {
  const [state, setState] = useState(0);
  const sliderButton = slidesData.length
  console.log(sliderButton)
  return (
    <div>
      <div>
        <SliderItem slideData={slidesData[0]} />
        {/* {
            sliderButton.map(sliderItem => <button>helper</button>)
        } */}
      </div>
    </div>
  );
}

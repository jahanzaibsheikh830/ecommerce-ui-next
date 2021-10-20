import React from "react";
import SideBar from "../Shared/SideBar";
import Container from "../Shared/Container";
import { GiElectric } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import { opticsWatchCardData } from "../../HelpersData/OpticscardItems.helper";
import Card from "../Card/Card";

import ProductHeader from "./ProductHeader";
export default function CarsMain() {
  return (
    <div className='mainContainer'>
      <Container>
        <div className='carsMain'>
          <div>
            <SideBar optics />
          </div>
          <div className='cars'>
            <ProductHeader
              title='Optics / Watch'
              linkTitle='View all'
              LinkIcon={IoMdArrowDropright}
            />
            <div className='carsCardMain'>
              {opticsWatchCardData.map((val, ind) => {
                return <Card salesData={val} key={ind} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

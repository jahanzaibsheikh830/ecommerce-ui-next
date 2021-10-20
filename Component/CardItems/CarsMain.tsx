import React from "react";
import SideBar from "../Shared/SideBar";
import Container from "../Shared/Container";
import { IoMdArrowDropright } from "react-icons/io";
import { carsCardData } from "../../HelpersData/CarsCardItem.helper";
import Card from "../Card/Card";
import ProductHeader from "./ProductHeader";
export default function CarsMain() {
  return (
    <div className='mainContainer'>
      <Container>
        <div className='carsMain'>
          <div>
            <SideBar cars={true} />
          </div>
          <div className='cars'>
            <ProductHeader
              title='Cars'
              linkTitle='View all'
              LinkIcon={IoMdArrowDropright}
            />
            <div className='carsCardMain'>
              {carsCardData.map((val, ind) => {
                return <Card salesData={val} key={ind} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

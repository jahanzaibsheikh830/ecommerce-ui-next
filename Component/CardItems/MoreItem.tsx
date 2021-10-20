import React from "react";
import { moreData } from "../../HelpersData/MoreItem.helper";
import Card from "../Card/Card";
import Container from "../Shared/Container";
import { IoMdArrowDropright } from "react-icons/io";
import ProductHeader from "./ProductHeader";
export default function salesItem() {
  return (
    <div className='main'>
      <Container>
        <ProductHeader
          title='More for You'
          linkTitle='View all'
          LinkIcon={IoMdArrowDropright}
        />
        <div className='salesCard'>
          {moreData.map((val, i) => {
            return (
              <div key={i}>
                <Card salesData={val} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

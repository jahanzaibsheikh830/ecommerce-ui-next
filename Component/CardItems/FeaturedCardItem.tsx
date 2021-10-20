import React from "react";
import { featuredData } from "../../HelpersData/FeaturedData.helper";
import { GiSeaStar } from "react-icons/gi";

import { IoMdArrowDropright } from "react-icons/io";
import FeaturedCard from "../Card/FeaturedCard";
import ProductHeader from "./ProductHeader";
export default function FeaturedCardItem() {
  return (
    <div className='Main'>
      <ProductHeader
        title='Featured Brands'
        TitleIcon={GiSeaStar}
        linkTitle='View all'
        color='rgb(255, 145, 1)'
        LinkIcon={IoMdArrowDropright}
      />
      <div className='featuresMain'>
        {featuredData.map((val, ind) => {
          return <FeaturedCard featuredData={val} key={ind} featured />;
        })}
      </div>
    </div>
  );
}

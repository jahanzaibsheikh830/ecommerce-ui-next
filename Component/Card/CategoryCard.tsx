import React from "react";
import Image from "next/image";
import Button from "../Shared/Button";
interface CategoriesData {
  cardData?: {
    image?: any;
    name?: string;
    status?: string;
  };
}
export default function CategoryCard({ cardData }: CategoriesData) {
  return (
    <div className='mainContainer'>
      <div className='categoryCardMain'>
        <div
          className='categoryProduct'
          style={{
            backgroundImage: `url(${cardData?.image.src})`,
          }}
        >
          <div className='categoryProductBtn'>
            <div>
              <Button text={cardData?.name} type={"categoryBtn"} />
            </div>
            <div>
              <Button text={cardData?.status} type={"statusBtn"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

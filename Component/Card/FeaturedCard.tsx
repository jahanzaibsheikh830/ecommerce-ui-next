import React from "react";
import Image from "next/image";
interface FeaturedCardProps {
  featuredData: {
    image?: any;
    price?: string;
    name?: string;
  };
  discount?: boolean;
  featured?: boolean;
}
export default function FeaturedCard({
  featuredData,
  discount,
  featured,
}: FeaturedCardProps) {
  return (
    <div>
      <div className={discount ? "dicountMainCard" : "mainCard"}>
        <div className='image'>
          <Image
            src={featuredData.image}
            alt='featued image'
            width={featuredData.price ? 300 : 280}
            height={featuredData.price ? 280 : 200}
          />
        </div>
        <div className='title'>
          <h4>{featuredData.name}</h4>
        </div>
        <div className='price'>
          <span>{featuredData.price}</span>

          {discount && <span className='cutPrice'>{featuredData.price}</span>}
        </div>
      </div>
    </div>
  );
}

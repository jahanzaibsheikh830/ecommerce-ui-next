import React from "react";
import Image from "next/image";
interface CategoryProps {
  categoryData?: {
    icon?: any;
    name?: string;
  };
}
export default function AllCategoryCard({ categoryData }: CategoryProps) {
  return (
    <div>
      <div className='categoryMain'>
        <div>
          <Image src={categoryData?.icon} alt='image' width={50} height={50} />
        </div>
        <div>
          <h4>{categoryData?.name}</h4>
        </div>
      </div>
    </div>
  );
}

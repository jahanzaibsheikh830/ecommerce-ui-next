import React from "react";
interface ProductHeaderProps {
  title?: string;
  TitleIcon?: any;
  LinkIcon?: any;
  linkTitle?: string;
  color?: string;
}
export default function ProductHeader({
  TitleIcon,
  title,
  LinkIcon,
  linkTitle,
  color,
}: ProductHeaderProps) {
  return (
    <div className='productHeader'>
      <div className='productHeading'>
        <div>
          {TitleIcon && (
            <TitleIcon className='productIcon' size={25} color={color} />
          )}
        </div>
        <div>
          <h2>{title}</h2>
        </div>
      </div>
      <div className='linkTitle'>
        <div>
          <p>{linkTitle}</p>
        </div>
        <div>{LinkIcon && <LinkIcon className='linkIcon' size={20} />}</div>
      </div>
    </div>
  );
}

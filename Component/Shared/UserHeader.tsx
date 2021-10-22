import React from "react";
import UserProfBtn from "./UserProfBtn";
interface UserProp {
  title?: string;
  Icon?: any;
  buttonText?: string;
  iconSize?: string;
}
export default function UserHeader({
  title,
  Icon,
  buttonText,
  iconSize,
}: UserProp) {
  return (
    <div className='userheader'>
      <div>
        <span>{<Icon size={iconSize} color='rgb(210, 63, 87)' />}</span>
        <h3>{title}</h3>
      </div>
      <div>{buttonText && <UserProfBtn text={buttonText} />}</div>
    </div>
  );
}

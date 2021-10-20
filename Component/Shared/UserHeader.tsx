import React from "react";
import UserProfBtn from "./UserProfBtn";
export default function UserHeader({ title, Icon, buttonText }) {
  return (
    <div className='userheader'>
      <div>
        <span>{<Icon size={15} color='rgb(210, 63, 87)' />}</span>
        <h3>{title}</h3>
      </div>
      <div>
        <UserProfBtn text={buttonText} />
      </div>
    </div>
  );
}

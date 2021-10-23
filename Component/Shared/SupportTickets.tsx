import React from "react";
import UserHeader from "./UserHeader";
import { GiHeadphones } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import profilePic from "../../assests/profilePic.png";
import Image from "next/image";
import { supportTicket } from "../../HelpersData/SupportTicket.helper";
export default function SupportTickets() {
  return (
    <div>
      <div className='supportTicketsMain'>
        <UserHeader title='Support Ticket' Icon={GiHeadphones} iconSize='25' />
        <div>
          {supportTicket.map((val, ind) => {
            return (
              <div key={ind} className='supportTickets'>
                <div>
                  <h4>{val.complain}</h4>
                  <div className='supportTicketsRow2'>
                    <p className='status'>{val.status}</p>
                    <p className='issueStatus'>{val.issueStatus}</p>
                    <p className='date'>{val.date}</p>
                    <p className='prob'>website problem</p>
                  </div>
                </div>
                <div>
                  <BsArrowRight cursor='pointer' size='20' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

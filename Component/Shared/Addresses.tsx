import React from "react";
import UserHeader from "./UserHeader";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { addresses } from "../../HelpersData/Adresses.helper";
export default function Addresses() {
  return (
    <div className='ordersMain'>
      <UserHeader
        title='my adresses'
        Icon={FaMapMarkerAlt}
        iconSize='20'
        buttonText='add new addresses'
      />
      <div>
        <div className='addresses'>
          {addresses.map((val, ind) => {
            return (
              <div key={ind} className='addressesDetail'>
                <div>
                  <h4>{val.name}</h4>
                </div>
                <div className='address'>
                  <p>{val.address}</p>
                </div>
                <div className='phone'>
                  <p>{val.phone}</p>
                </div>
                <div>
                  <p>
                    <AiFillEdit
                      cursor='pointer'
                      size='20'
                      color='#707070'
                      className='editIcon'
                    />
                    <AiFillDelete cursor='pointer' size='20' color='#707070' />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

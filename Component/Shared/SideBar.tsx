import React from "react";
import {
  carCompaniesData,
  phonesCompaniesData,
  opticsAndWatchCompaniesData,
} from "../../HelpersData/CompaniesData";
import Image from "next/image";
interface carsProps {
  cars?: boolean;
  phones?: boolean;
  optics?: boolean;
}
export default function SideBar({ cars, phones, optics }: carsProps) {
  return (
    <div>
      <div className='sideBarMain'>
        {!cars && (
          <div className='sideBarheader'>
            <p className='brand'>Brands</p>
            <p className='border'>|</p>
            <p className='shop'>Shops</p>
          </div>
        )}
        {cars ? (
          <>
            {carCompaniesData &&
              carCompaniesData.map((val, ind) => {
                return (
                  <div key={ind}>
                    <div className='sideBarList'>
                      <div>
                        <Image
                          src={val.icon}
                          alt='company logo'
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className='companyName'>{val.name}</div>
                    </div>
                  </div>
                );
              })}
          </>
        ) : null}
        {phones ? (
          <>
            {phonesCompaniesData &&
              phonesCompaniesData.map((val, ind) => {
                return (
                  <div key={ind}>
                    <div className='sideBarList'>
                      <div>
                        <Image
                          src={val.icon}
                          alt='company logo'
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className='companyName'>{val.name}</div>
                    </div>
                  </div>
                );
              })}
          </>
        ) : null}
        {optics ? (
          <>
            {opticsAndWatchCompaniesData &&
              opticsAndWatchCompaniesData.map((val, ind) => {
                return (
                  <div key={ind}>
                    <div className='sideBarList'>
                      <div>
                        <Image
                          src={val.icon}
                          alt='company logo'
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className='companyName'>{val.name}</div>
                    </div>
                  </div>
                );
              })}
          </>
        ) : null}
        <div className='sideBarList brands'>
          <div className='companyName'>View All Brands</div>
        </div>
      </div>
    </div>
  );
}

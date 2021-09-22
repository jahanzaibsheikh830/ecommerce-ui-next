import React from "react";
import {
  carCompaniesData,
  phonesCompaniesData,
  opticsAndWatchCompaniesData,
} from "../helperData/CompaniesData";
import styles from "../styles/components/sideBar.module.scss";
import Image from "next/image";
interface carsProps {
  cars?: boolean;
  phones?: boolean;
  optics?: boolean;
}
export default function SideBar({ cars, phones, optics }: carsProps) {
  return (
    <div>
      <div className={styles.sideBarMain}>
        {cars ? (
          <>
            {carCompaniesData &&
              carCompaniesData.map((val, ind) => {
                return (
                  <div key={ind}>
                    <div className={styles.sideBarList}>
                      <div>
                        <Image
                          src={val.icon}
                          alt='company logo'
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className={styles.companyName}>{val.name}</div>
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
                    <div className={styles.sideBarList}>
                      <div>
                        <Image
                          src={val.icon}
                          alt='company logo'
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className={styles.companyName}>{val.name}</div>
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
                    <div className={styles.sideBarList}>
                      <div>
                        <Image
                          src={val.icon}
                          alt='company logo'
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className={styles.companyName}>{val.name}</div>
                    </div>
                  </div>
                );
              })}
          </>
        ) : null}
        <div className={`${styles.sideBarList} ${styles.brands}`}>
          <div className={styles.companyName}>View All Brands</div>
        </div>
      </div>
    </div>
  );
}

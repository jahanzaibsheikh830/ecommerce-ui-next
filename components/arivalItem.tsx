import React from "react";
import Container from "./container";
import { arrivalData } from "../helperData/arrivalData.helper";
import { MdFiberNew } from "react-icons/Md";
import { IoMdArrowDropright } from "react-icons/Io";
import styles from "../styles/components/arrivalItems.module.scss";
import ArrivalCard from "./featuredCard";
export default function ArivalItem() {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.salesHeader}>
          <div className={styles.salesHeading}>
            <div>
              <MdFiberNew className={styles.salesIcon} size={25} />
            </div>
            <div>
              <h2>New Arrivals</h2>
            </div>
          </div>
          <div className={styles.detailsPara}>
            <div>
              <p>View all</p>
            </div>
            <div>
              <IoMdArrowDropright className={styles.detailsIcon} size={20} />
            </div>
          </div>
        </div>
        <div className={styles.arrivalCardMain}>
          {arrivalData.map((val, ind) => {
            return <ArrivalCard featuredData={val} key={ind} />;
          })}
        </div>
      </Container>
    </div>
  );
}

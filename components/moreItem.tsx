import React from "react";
import { moreData } from "../helperData/moreItem.helper";
import Card from "./card";
import Container from "./container";
import { GiElectric } from "react-icons/Gi";
import { IoMdArrowDropright } from "react-icons/Io";
import styles from "../styles/components/moreItem.module.scss";
export default function salesItem() {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.salesHeader}>
          <div className={styles.salesHeading}>
            <div>
              <h2>More For You</h2>
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
        <div className={`${styles.salesCard}`}>
          {moreData.map((val, i) => {
            return (
              <div key={i}>
                <Card salesData={val} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

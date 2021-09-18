import React from "react";
import SideBar from "./sideBar";
import Container from "./container";
import styles from "../styles/components/carsMain.module.scss";
import { GiElectric } from "react-icons/Gi";
import { IoMdArrowDropright } from "react-icons/Io";
import { phonesCardData } from "../helperData/phoneCardItems.helper";
import Card from "./card";
export default function CarsMain() {
  return (
    <div className={styles.mainContainer}>
      <Container>
        <div className={styles.carsMain}>
          <div>
            <SideBar phones />
          </div>
          <div className={styles.cars}>
            <div className={styles.salesHeader}>
              <div className={styles.salesHeading}>
                <div>
                  <h2>Mobile Phones</h2>
                </div>
              </div>
              <div className={styles.detailsPara}>
                <div>
                  <p>View all</p>
                </div>
                <div>
                  <IoMdArrowDropright
                    className={styles.detailsIcon}
                    size={20}
                  />
                </div>
              </div>
            </div>
            <div className={styles.carsCardMain}>
              {phonesCardData.map((val, ind) => {
                return <Card salesData={val} key={ind} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

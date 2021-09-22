import React from "react";
import SideBar from "./sideBar";
import Container from "./container";
import styles from "../styles/components/carsMain.module.scss";
import { GiElectric } from "react-icons/Gi";
import { IoMdArrowDropright } from "react-icons/io";
import { opticsWatchCardData } from "../helperData/opticscardItems.helper";
import Card from "./cards/card";
import ProductHeader from "./productHeader";
export default function CarsMain() {
  return (
    <div className={styles.mainContainer}>
      <Container>
        <div className={styles.carsMain}>
          <div>
            <SideBar optics />
          </div>
          <div className={styles.cars}>
            <ProductHeader
              title='Optics / Watch'
              linkTitle='View all'
              LinkIcon={IoMdArrowDropright}
            />
            <div className={styles.carsCardMain}>
              {opticsWatchCardData.map((val, ind) => {
                return <Card salesData={val} key={ind} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

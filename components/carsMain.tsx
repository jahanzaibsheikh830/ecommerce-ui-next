import React from "react";
import SideBar from "./sideBar";
import Container from "./container";
import styles from "../styles/components/carsMain.module.scss";
import { GiElectric } from "react-icons/Gi";
import { IoMdArrowDropright } from "react-icons/Io";
import { carsCardData } from "../helperData/carsCardItem.helper";
import Card from "./cards/card";
import ProductHeader from "./productHeader";
export default function CarsMain() {
  return (
    <div className={styles.mainContainer}>
      <Container>
        <div className={styles.carsMain}>
          <div>
            <SideBar cars />
          </div>
          <div className={styles.cars}>
            <ProductHeader
              title='Cars'
              linkTitle='View all'
              LinkIcon={IoMdArrowDropright}
            />
            <div className={styles.carsCardMain}>
              {carsCardData.map((val, ind) => {
                return <Card salesData={val} key={ind} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

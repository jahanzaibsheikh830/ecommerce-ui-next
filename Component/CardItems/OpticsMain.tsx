import React from "react";
import SideBar from "../Shared/SideBar";
import Container from "../Shared/Container";
import styles from "../../Styles/Components/CardItems/CarsMain.module.scss";
import { GiElectric } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import { opticsWatchCardData } from "../../HelpersData/OpticscardItems.helper";
import Card from "../Card/Card";

import ProductHeader from "./ProductHeader";
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

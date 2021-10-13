import React from "react";
import SideBar from "../Shared/SideBar";
import Container from "../Shared/Container";
import styles from "../../Styles/Components/CardItems/CarsMain.module.scss";
import { GiElectric } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import { phonesCardData } from "../../HelperData/PhoneCardItems.helper";
import Card from "../Cards/Card";
import ProductHeader from "./ProductHeader";
export default function CarsMain() {
  return (
    <div className={styles.mainContainer}>
      <Container>
        <div className={styles.carsMain}>
          <div>
            <SideBar phones />
          </div>
          <div className={styles.cars}>
            <ProductHeader
              title='Mobile Phones'
              linkTitle='View all'
              LinkIcon={IoMdArrowDropright}
            />
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

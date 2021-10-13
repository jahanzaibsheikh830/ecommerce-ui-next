import React from "react";
import SideBar from "../Shared/SideBar";
import Container from "../Shared/Container";
import styles from "../../Styles/Components/CardItems/CarsMain.module.scss";
import { IoMdArrowDropright } from "react-icons/io";
import { carsCardData } from "../../HelpersData/CarsCardItem.helper";
import Card from "../Card/Card";
import ProductHeader from "./ProductHeader";
export default function CarsMain() {
  return (
    <div className={styles.mainContainer}>
      <Container>
        <div className={styles.carsMain}>
          <div>
            <SideBar cars={true} />
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

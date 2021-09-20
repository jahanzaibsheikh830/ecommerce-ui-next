import React from "react";
import Container from "./container";
import { arrivalData } from "../helperData/arrivalData.helper";
import { MdFiberNew } from "react-icons/Md";
import { IoMdArrowDropright } from "react-icons/Io";
import styles from "../styles/components/arrivalItems.module.scss";
import ArrivalCard from "./cards/featuredCard";
import ProductHeader from "./productHeader";
export default function ArivalItem() {
  return (
    <div className={styles.main}>
      <Container>
        <ProductHeader
          title='New Arrivals'
          TitleIcon={MdFiberNew}
          linkTitle='View all'
          color='rgb(104, 201, 68)'
          LinkIcon={IoMdArrowDropright}
        />
        <div className={styles.arrivalCardMain}>
          {arrivalData.map((val, ind) => {
            return <ArrivalCard featuredData={val} key={ind} />;
          })}
        </div>
      </Container>
    </div>
  );
}

import React from "react";
import { moreData } from "../helperData/moreItem.helper";
import Card from "./cards/card";
import Container from "./container";
import { IoMdArrowDropright } from "react-icons/io";
import styles from "../styles/components/moreItem.module.scss";
import ProductHeader from "./productHeader";
export default function salesItem() {
  return (
    <div className={styles.main}>
      <Container>
        <ProductHeader
          title='More for You'
          linkTitle='View all'
          LinkIcon={IoMdArrowDropright}
        />
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

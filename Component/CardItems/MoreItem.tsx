import React from "react";
import { moreData } from "../../HelpersData/MoreItem.helper";
import Card from "../Card/Card";
import Container from "../Shared/Container";
import { IoMdArrowDropright } from "react-icons/io";
import styles from "../../Styles/Components/CardItems/MoreItem.module.scss";
import ProductHeader from "./ProductHeader";
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

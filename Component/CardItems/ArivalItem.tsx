import React from "react";
import Container from "../Shared/Container";
import { arrivalData } from "../../HelpersData/ArrivalData.helper";
import { MdFiberNew } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import styles from "../../Styles/Components/CardItems/ArrivalItems.module.scss";
import ArrivalCard from "../Card/FeaturedCard";
import ProductHeader from "./ProductHeader";
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

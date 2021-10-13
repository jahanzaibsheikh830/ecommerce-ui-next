import React from "react";
import Container from "../Shared/Container";
import { serviceData } from "../../HelperData/ServiceData.helper";
import styles from "../../Styles/Components/Cards/ServiceCard.module.scss";
export default function ServiceCard() {
  return (
    <div className={styles.serviceCardMain}>
      <Container>
        <div className={styles.serviceCard}>
          {serviceData.map((val, ind) => {
            return (
              <div key={ind} className={styles.serviceCardContent}>
                <div>
                  <div className={styles.serviceCardIcon}>{<val.icon />}</div>
                  <div>
                    <h4>{val.title}</h4>
                  </div>
                  <div>
                    <p>{val.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

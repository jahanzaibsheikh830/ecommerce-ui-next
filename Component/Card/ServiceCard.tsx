import React from "react";
import Container from "../Shared/Container";
import { serviceData } from "../../HelpersData/ServiceData.helper";
export default function ServiceCard() {
  return (
    <div className='serviceCardMain'>
      <Container>
        <div className='serviceCard'>
          {serviceData.map((val, ind) => {
            return (
              <div key={ind} className='serviceCardContent'>
                <div>
                  <div className='serviceCardIcon'>{<val.icon />}</div>
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

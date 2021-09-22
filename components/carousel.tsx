import React, { useRef, useState } from "react";
import Image from "next/image";
// import { Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import Image1 from "../public/9410-AMI-Poster-80X60cm.jpg";
import Image2 from "../public/9490-AMI-Poster-80X60cm.jpg";
import Image3 from "../public/9500-AMI-Poster-80X60cm.jpg";

export const Flipcard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flipCardData = [
    { img: Image1, text: "loadReady" },
    { img: Image2, text: "moreSpace" },
    { img: Image3, text: "recover" },
    { img: Image2, text: "moreSpace" },
    { img: Image1, text: "loadReady" },
    { img: Image2, text: "moreSpace" },
    { img: Image3, text: "recover" },
    { img: Image2, text: "moreSpace" },
  ];
  const router = useRouter();
  const { locale } = router;
  const ref = useRef(null);

  const onLeft = () => {
    const width =
      typeof window !== "undefined" ? (window.innerWidth >= 576 ? 4 : 7) : 0;
    setActiveIndex((prev) => (prev === 0 ? width : --prev));
  };

  const onRight = () => {
    const width =
      typeof window !== "undefined" ? (window.innerWidth >= 576 ? 4 : 7) : 0;
    setActiveIndex((prev) => (prev < width ? ++prev : 0));
  };

  return (
    <div className='flipCardMainContainer pt-4 pt-sm-4 pt-md-5 pb-1 pb-sm-0'>
      <div className='flipCardDiv'>
        <div className='carousel-controls left'>
          <span onClick={onLeft} className='arrow-container'>
            <i className='fas fa-chevron-left left-arrow'></i>
          </span>
        </div>
        <div className='flipCardContainer'>
          {/* <Row
            lg={12}
            style={{
              transform: `translateX(-${
                ref?.current?.clientWidth * activeIndex
              }px)`,
            }}
            className='flex-nowrap carouselContainer'
          >
            {flipCardData.map((value, index) => (
              <Col
                lg={3}
                md={6}
                sm={6}
                xs={8}
                key={index}
                className='flip-card mb-3'
                ref={ref}
              >
                <Col classNameName='flip-card-inner'>
                  <Col className='flip-card-front'>
                    <Image
                      objectFit='cover'
                      src={value.img}
                      alt='Avatar'
                      className='flip-card-image'
                    />
                  </Col>
                  <Col className='flip-card-back'>
                    <h1>{English ? EN[value.text] : AR[value.text]}</h1>
                    <div className='btns-main'>
                      <i className='fa fa-link btn-icons' />
                      <i className='fa fa-expand-arrows-alt btn-icons' />
                    </div>
                  </Col>
                </Col>
              </Col>
            ))}
          </Row> */}
        </div>
        <div className='carousel-controls right'>
          <span onClick={onRight} className='arrow-container'>
            <i className='fas fa-chevron-right right-arrow'></i>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

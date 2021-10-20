import React, { useEffect, useRef, useState } from "react";
// // import Image from "next/image";
// // import { Col, Row } from "react-bootstrap";
// // import { useRouter } from "next/router";
// // import dynamic from "next/dynamic";
// import styles from "../styles/components/carousel.scss";
// import { salesData } from "../helperData/sale.helper";
// // const ReactViewer = dynamic(() => import("react-viewer"), { ssr: false });

// // const Carousel = ({ data = [], disableAnimation, reset }) => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const ref = useRef(null);
// //   const carouselDataLength =
// //     typeof window !== "undefined" ? (window.innerWidth >= 576 ? 4 : 2) : 2;

// //   const onLeft = () => {
// //     setActiveIndex((prev) => (prev < 0 ? carouselDataLength - 1 : --prev));
// //   };

// //   const onRight = () => {
// //     setActiveIndex((prev) => (prev < carouselDataLength - 1 ? ++prev : 0));
// //   };
// //   //   const carouselDataLength =
// //   //     typeof window !== "undefined" ? (window.innerWidth >= 576 ? 4 : 7) : 0;
// //   //   const router = useRouter();
// //   //   const { locale } = router;
// //   //   const isEnglish = locale === "en-US";
// //   //   const ref = useRef(null);
// //   //   const intervalRef = useRef(null);
// //   //   const imageIntervalRef = useRef(null);

// //   //   const [ImageViwer, setImageViewer] = useState("");

// //   //   const [activeIndex, setActiveIndex] = useState(carouselDataLength);

// //   //   const onLeft = () => {
// //   //     // clearInterval(intervalRef.current);
// //   //     setActiveIndex((prev) => (prev === 0 ? carouselDataLength : --prev));
// //   //   };

// //   //   const onRight = () => {
// //   //     // clearInterval(intervalRef.current);
// //   //     setActiveIndex((prev) => (prev < carouselDataLength ? ++prev : 0));
// //   //   };

// //   //   const onRightCarousel = () => {
// //   //     if (!!String(ImageViwer)) {
// //   //       clearInterval(imageIntervalRef.current);
// //   //       setImageViewer((prev) => (prev < data?.length - 1 ? ++prev : 0));
// //   //     }
// //   //   };

// //   //   const onChange = (_, index) => {
// //   //     // clearInterval(imageIntervalRef);
// //   //     setImageViewer(index);
// //   //   };

// //   // useEffect(() => {
// //   //   clearInterval(imageIntervalRef?.current);
// //   //   if (!!String(ImageViwer))
// //   //     imageIntervalRef.current = setTimeout(() => {
// //   //       onRightCarousel();
// //   //     }, 2000);
// //   // }, [ImageViwer]);

// //   // useEffect(() => {
// //   //   if (!disableAnimation)
// //   //     intervalRef.current = setTimeout(() => {
// //   //       onRight();
// //   //       // else onLeft();
// //   //     }, 2000);
// //   //   else clearInterval(intervalRef?.current);
// //   // }, [activeIndex, disableAnimation, reset]);

// //   // useEffect(() => {
// //   //   if (reset) {
// //   //     setActiveIndex(isEnglish ? 0 : carouselDataLength);
// //   //   }
// //   // }, [reset]);

// //   return (
// //     <div className={flipCardMainContainer} dir={"ltr"}>
// //       <div className={flipCardDiv}>
// //         <div className={`${carousel_controls} ${left}`}>
// //           <span onClick={onLeft} className={arrow_container}>
// //             <i className={left_arrow}></i>
// //           </span>
// //         </div>
// //         <div className={flipCardContainerDiv}>
// //           <div className={flipCardContainer}>
// //             <div
// //               style={{
// //                 transform: `translateX(-${
// //                   ref?.current?.clientWidth * activeIndex
// //                 }px)`,
// //                 display: "flex",
// //               }}
// //               className={`${flex_nowrap} ${carouselContainer}`}
// //             >
// //               {salesData.map((value, index) => (
// //                 <div key={index} className={flip_card} ref={ref}>
// //                   <div className={flip_card_inner}>
// //                     <div className={flip_card_front}>
// //                       <Image
// //                         objectFit='cover'
// //                         src={value.image}
// //                         alt='Avatar'
// //                         className={flip_card_image}
// //                         // onClick={() => setImageViewer(index)}
// //                       />
// //                     </div>
// //                   </div>
// //                   <p className={carousel_text}>{value?.title}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //         <div className={`${carousel_controls} ${right}`}>
// //           <span onClick={onRight} className={arrow_container}>
// //             <i className={right_arrow}></i>
// //           </span>
// //         </div>
// //       </div>
// //       {/* <ReactViewer
// //         visible={!!String(ImageViwer)}
// //         activeIndex={ImageViwer}
// //         drag={false}
// //         onChange={onChange}
// //         onClose={() => setImageViewer("")}
// //         images={data}
// //       /> */}
// //     </div>
// //   );
// // };

// // export default Carousel;
// import React, { useState, useRef } from "react";
// // import { carouselItem } from "./Carousel.helper";
// // import styles from "./HomeCarousel.scss";
// import Image from "next/image";
// // import CustomButton from "../CustomButton/CustomButton";
// const HomeCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const ref = useRef(null);
//   const carouselDataLength =
//     typeof window !== "undefined" ? (window.innerWidth >= 576 ? 4 : 4) : 2;

//   const onLeft = () => {
//     setActiveIndex((prev) => (prev < 0 ? carouselDataLength - 1 : --prev));
//   };

//   const onRight = () => {
//     setActiveIndex((prev) => (prev < carouselDataLength - 1 ? ++prev : 0));
//   };
//   return (
//     <div className={carouselMain}>
//       <div className={carouselDiv}>
//         {salesData?.map((item, index) => {
//           return (
//             <div className={carouselMap} key={index}>
//               <div
//                 className={carouselWrapper}
//                 style={{
//                   transform: `translateX(-${
//                     ref?.current?.clientWidth * activeIndex
//                   }px)`,
//                   height: "100%",
//                   overflow: "hidden",
//                   display: "flex",
//                   width: "100vw",
//                 }}
//                 ref={ref}
//               >
//                 <div className={carouselItemMain}>
//                   <div className={carouselItemright}>
//                     <h1>{item?.title}</h1>
//                     {/* <p>{item?.paragraph}</p>
//                     <CustomButton text='Shop Now' link={item?.buttonLink} /> */}
//                   </div>
//                   <div>
//                     <Image
//                       src={item?.image}
//                       alt='Picture of the shoe'
//                       height='300'
//                       width='300'
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className={controlBtn}>
//         <span onClick={onLeft}>&#8592;</span>
//         <span onClick={onRight}>&#8594;</span>
//       </div>
//     </div>
//   );
// };

// export default HomeCarousel;

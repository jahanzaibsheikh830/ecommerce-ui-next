import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { Col, Row } from "react-bootstrap";
// import { useRouter } from "next/router";
// import dynamic from "next/dynamic";
// import styles from "../styles/components/carousel.module.scss";
// import { salesData } from "../helperData/sale.helper";
// const ReactViewer = dynamic(() => import("react-viewer"), { ssr: false });

// const Carousel = ({ data = [], disableAnimation, reset }) => {
//   const carouselDataLength = 0;
//   // typeof window !== "undefined" ? (window.innerWidth >= 576 ? 4 : 7) : 0;
//   const router = useRouter();
//   const { locale } = router;
//   const isEnglish = locale === "en-US";
//   const ref = useRef(null);
//   const intervalRef = useRef(null);
//   const imageIntervalRef = useRef(null);

//   const [ImageViwer, setImageViewer] = useState("");

//   const [activeIndex, setActiveIndex] = useState(carouselDataLength);

//   const onLeft = () => {
//     // clearInterval(intervalRef.current);
//     setActiveIndex((prev) => (prev === 0 ? carouselDataLength : --prev));
//   };

//   const onRight = () => {
//     // clearInterval(intervalRef.current);
//     setActiveIndex((prev) => (prev < carouselDataLength ? ++prev : 0));
//   };

//   const onRightCarousel = () => {
//     if (!!String(ImageViwer)) {
//       clearInterval(imageIntervalRef.current);
//       setImageViewer((prev) => (prev < data?.length - 1 ? ++prev : 0));
//     }
//   };

//   const onChange = (_, index) => {
//     // clearInterval(imageIntervalRef);
//     setImageViewer(index);
//   };

//   // useEffect(() => {
//   //   clearInterval(imageIntervalRef?.current);
//   //   if (!!String(ImageViwer))
//   //     imageIntervalRef.current = setTimeout(() => {
//   //       onRightCarousel();
//   //     }, 2000);
//   // }, [ImageViwer]);

//   // useEffect(() => {
//   //   if (!disableAnimation)
//   //     intervalRef.current = setTimeout(() => {
//   //       onRight();
//   //       // else onLeft();
//   //     }, 2000);
//   //   else clearInterval(intervalRef?.current);
//   // }, [activeIndex, disableAnimation, reset]);

//   // useEffect(() => {
//   //   if (reset) {
//   //     setActiveIndex(isEnglish ? 0 : carouselDataLength);
//   //   }
//   // }, [reset]);

//   return (
//     <div className={styles.flipCardMainContainer} dir={"ltr"}>
//       <div className={styles.flipCardDiv}>
//         <div className={`${styles.carousel_controls} ${styles.left}`}>
//           <span onClick={onLeft} className={styles.arrow_container}>
//             <i className={styles.left_arrow}></i>
//           </span>
//         </div>
//         <div className={styles.flipCardContainerDiv}>
//           <div className={styles.flipCardContainer}>
//             <div
//               style={{
//                 transform: `translateX(-${
//                   ref?.current?.clientWidth * activeIndex
//                 }px)`,
//                 display: "flex",
//               }}
//               className={`${styles.flex_nowrap} ${styles.carouselContainer}`}
//             >
//               {salesData.map((value, index) => (
//                 <div key={index} className={styles.flip_card} ref={ref}>
//                   <div className={styles.flip_card_inner}>
//                     <div className={styles.flip_card_front}>
//                       <Image
//                         objectFit='cover'
//                         src={value.image}
//                         alt='Avatar'
//                         className={styles.flip_card_image}
//                         onClick={() => setImageViewer(index)}
//                       />
//                     </div>
//                   </div>
//                   <p className={styles.carousel_text}>{value?.title}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className={`${styles.carousel_controls} ${styles.right}`}>
//           <span onClick={onRight} className={styles.arrow_container}>
//             <i className={styles.right_arrow}></i>
//           </span>
//         </div>
//       </div>
//       <ReactViewer
//         visible={!!String(ImageViwer)}
//         activeIndex={ImageViwer}
//         drag={false}
//         onChange={onChange}
//         onClose={() => setImageViewer("")}
//         images={data}
//       />
//     </div>
//   );
// };

// export default Carousel;

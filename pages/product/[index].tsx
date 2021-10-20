import React from "react";
import Header from "../../Component/Shared/Header";
import Footer from "../../Component/Shared/Footer";
import { useRouter } from "next/router";
import SingleProduct from "../../Component/Shared/SingleProduct";
export default function Product() {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      <Header />
      <SingleProduct modalData={router.query} />
      <Footer />
    </div>
  );
}

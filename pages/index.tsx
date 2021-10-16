import Head from "next/head";
import Image from "next/image";
import Header from "../Component/Shared/Header";
import Slider from "../Component/Shared/Slider";
import SaleItem from "../Component/CardItems/FlashSalesItem";
import CategoryCard from "../Component/CardItems/CategoryCardItem";
import FeaturedAndRatingMain from "../Component/CardItems/FeaturedAndRatingMain";
import ArrivalCard from "../Component/CardItems/ArivalItem";
import DiscountCard from "../Component/CardItems/DiscountCardItem";
import CarsMain from "../Component/CardItems/CarsMain";
import PhonesMain from "../Component/CardItems/PhonesMain";
import Banner from "../Component/Shared/Banner";
import OpticsMain from "../Component/CardItems/OpticsMain";
import AllCategoryCard from "../Component/CardItems/AllCategoryCardItem";
import MoreData from "../Component/CardItems/MoreItem";
import ServiceCard from "../Component/Card/ServiceCard";
import Footer from "../Component/Shared/Footer";
import BottomTab from "../Component/Shared/BottomNav";
import Modal from "../Component/Shared/Modal";
// import Dummy from "../components/carousel";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Slider />
      <SaleItem />
      <CategoryCard />
      <FeaturedAndRatingMain />
      <ArrivalCard />
      <DiscountCard />
      <CarsMain />
      <PhonesMain />
      <Banner />
      <OpticsMain />
      <AllCategoryCard />
      <MoreData />
      <ServiceCard />
      <Footer />
      {/* <Modal /> */}
      <BottomTab />
    </div>
  );
}

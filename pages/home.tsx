import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Slider from "../components/slider";
import SaleItem from "../components/flashSalesItem";
import CategoryCard from "../components/categoryCardItem";
import FeaturedAndRatingMain from "../components/featuredAndRatingMain";
import ArrivalCard from "../components/arivalItem";
import DiscountCard from "../components/discountCardItem";
import CarsMain from "../components/carsMain";
import PhonesMain from "../components/phonesMain";
import Banner from "../components/banner";
import OpticsMain from "../components/opticsMain";
import AllCategoryCard from "../components/allCategoryCardItem";
import MoreData from "../components/moreItem";
import ServiceCard from "../components/cards/serviceCard";
import Footer from "../components/footer";
import BottomTab from "../components/bottomNav";
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
      {/* <Dummy /> */}
      <BottomTab />
    </div>
  );
}

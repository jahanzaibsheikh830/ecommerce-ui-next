import React from "react";
import ProfileSideBar from "../../Component/Shared/ProfileSideBar";
import MainProfile from "../../Component/Shared/MainProfile";
import Orders from "../../Component/Shared/Orders";
import Wishlist from "../../Component/Shared/Wishlist";
import SupportTickets from "../../Component/Shared/SupportTickets";
import Addresses from "../../Component/Shared/Addresses";
import PaymentMethods from "../../Component/Shared/PaymentMethods";
import Header from "../../Component/Shared/Header";
import Footer from "../../Component/Shared/Footer";
import Container from "../../Component/Shared/Container";
import BottomNav from "../../Component/Shared/BottomNav";
import Modal from "../../Component/Shared/Modal";
import { useSelector, RootStateOrAny } from "react-redux";
import { useRouter } from "next/router";
export default function Profile() {
  const modalState = useSelector((state: RootStateOrAny) => state.ModalReducer);
  const router = useRouter();
  console.log("router", router.query.index);
  const path = router.query.index;
  return (
    <div>
      <Header />
      <div className='profileMain'>
        <Container>
          <div className='profileMainCol'>
            <ProfileSideBar />
            {path === "profile" ? (
              <MainProfile />
            ) : path === "orders" ? (
              <Orders />
            ) : path === "wishlist" ? (
              <Wishlist />
            ) : path === "support-tickets" ? (
              <SupportTickets />
            ) : path === "addresses" ? (
              <Addresses />
            ) : path === "payment-method" ? (
              <PaymentMethods />
            ) : (
              <MainProfile />
            )}
          </div>
        </Container>
      </div>
      <BottomNav />
      <Footer />
      {modalState?.showModal && (
        <Modal
          modalData={modalState?.modalData}
          showModal={modalState?.showModal}
        />
      )}
    </div>
  );
}

import React from "react";
import ProfileSideBar from "../../Component/Shared/ProfileSideBar";
import MainProfile from "../../Component/Shared/MainProfile";
import Header from "../../Component/Shared/Header";
import Footer from "../../Component/Shared/Footer";
import Container from "../../Component/Shared/Container";
import BottomNav from "../../Component/Shared/BottomNav";
import Modal from "../../Component/Shared/Modal";
import { useSelector, RootStateOrAny } from "react-redux";

export default function Profile() {
  const modalState = useSelector((state: RootStateOrAny) => state.ModalReducer);

  return (
    <div>
      <Header />
      <div className='profileMain'>
        <Container>
          <div className='profileMainCol'>
            <ProfileSideBar />
            <MainProfile />
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

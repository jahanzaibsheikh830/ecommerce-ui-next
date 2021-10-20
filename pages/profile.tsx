import React from "react";
import ProfileSideBar from "../Component/Shared/ProfileSideBar";
import MainProfile from "../Component/Shared/MainProfile";
import Header from "../Component/Shared/Header";
import Footer from "../Component/Shared/Footer";
import Container from "../Component/Shared/Container";
export default function Profile() {
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
      <Footer />
    </div>
  );
}

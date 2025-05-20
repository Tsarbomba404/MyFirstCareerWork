import React from "react";
import NavBar from "./NavBar";
import FirstSection from "./FirstSection";
import Client from "./Client";
import Community from "./Community/Community";
import Unlock from "./Unlock";
import Achievement from "./AchieveSection/Achievement";
import Calender from "./Calender";
import Customer from "./Customer";
import CommunityUpdates from "./CommunityUpdates/CommunityUpdates";
import SecondToLast from "./SecondToLast";
import Footer from "./Footer/Footer";
const AllSection = () => {
  return (
    <div>
      <NavBar />
      <FirstSection />
      <Client />
      <Community />
      <Unlock />
      <Achievement />
      <Calender />
      <Customer />
      <CommunityUpdates />
      <SecondToLast />
      <Footer />
    </div>
  );
};

export default AllSection;

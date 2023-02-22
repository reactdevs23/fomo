import React from "react";
import Menu from "../../global/navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import MoreContent from "./MoreContent/MoreContent";
import OtherContents from "./OtherContent/OtherContent";
import Privilege from "./Privilege/Privilage";

const Magazine = () => {
  return (
    <>
      <Menu noLogo={true} />
      <HeroSection />
      <OtherContents />
      <MoreContent />
      <Privilege />
    </>
  );
};

export default Magazine;

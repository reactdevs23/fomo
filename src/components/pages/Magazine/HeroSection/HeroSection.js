import React from "react";
import AllMagazine from "./AllMegazine/AllMagazine";
import styles from "./styles.module.css";
import TitleSection from "./TitleSection/TitleSection";

const HeroSection = () => {
  return (
    <div className={`${styles.heroSection} `}>
      <div className="container">
        <TitleSection />
        <AllMagazine />
      </div>
    </div>
  );
};

export default HeroSection;

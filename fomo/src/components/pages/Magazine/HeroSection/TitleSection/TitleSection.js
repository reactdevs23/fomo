import React from "react";
import styles from "./TitleSection.module.css";

const TitleSection = () => {
  return (
    <div
      className={`d-flex flex-column justify-center  ${styles.titleSection}`}
    >
      <h1 className={styles.title}>FOMO Magazine</h1>
      <p className={styles.text}>
        Discover The Latest NFT And Metaverse News Fast, Including; Music,
        Blockchain Gaming, NFT Avatars And Collectibles, Fashion, Sport And
        More.
      </p>
    </div>
  );
};

export default TitleSection;

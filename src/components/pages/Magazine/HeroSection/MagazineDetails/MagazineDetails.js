import React from "react";
import styles from "./styles.module.css";

const MagazineDetails = () => {
  return (
    <div className={styles.magazineDetails}>
      <img src="/images/magazine1.png" alt="#" className={styles.image} />
      <h4 className={styles.title}>
        Every day, in every city and town across the country
      </h4>
      <p className={styles.cratedByAndFeaturedAt}>
        by Nichole Becker and Daryl Wehner in Lifestyle
      </p>
      <p className={styles.cratedByAndFeaturedAt}>Featured — October, 2021</p>
      <p className={styles.text}>
        Discover the latest NFT and metaverse news fast, inclu musiblochain
        gaming, NFT avatars and collectibles, fashion, sport an more.Discover
        The Latest NFT And Metaverse News Fast, Including; Musi Blockchain
        Gaming, NFT Avatars And Collectibles, Fashion, Sport And More.
      </p>
    </div>
  );
};

export default MagazineDetails;

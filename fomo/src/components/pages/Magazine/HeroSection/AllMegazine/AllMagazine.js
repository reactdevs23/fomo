import React from "react";
import MagazineDetails from "../MagazineDetails/MagazineDetails";
import { FaTiktok, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import styles from "./styles.module.css";

const AllMagazine = () => {
  const socialMedia = [
    { icon: <FaTiktok className={styles.icon} />, to: "#" },
    { icon: <FaTwitter className={styles.icon} />, to: "#" },
    { icon: <FaFacebookF className={styles.icon} />, to: "#" },
    { icon: <FaInstagram className={styles.icon} />, to: "#" },
  ];
  const magazines = [
    {
      image: "/images/magazine7.png",
      title: "Every day, in every city and town across the country",
      createdBy: "by Damian Erdman",
      featuredAt: "October, 2021",
      text: "Discover the latest NFT and metaverse news fast, inclu musiblochain gaming, NFT avatars and collectibles, fashion, sport an more.Discover The Latest NFT And Metaverse News Fast, Including; Musi Blockchain Gaming, NFT Avatars And Collectibles, Fashion, Sport And More.",
    },
    {
      image: "/images/magazine2.png",
      title: "Every day, in every city and town across the country",
      createdBy: "by Damian Erdman",
      featuredAt: "October, 2021",
      text: "Discover the latest NFT and metaverse news fast, inclu musiblochain gaming, NFT avatars and collectibles, fashion, sport an more.Discover The Latest NFT And Metaverse News Fast, Including; Musi Blockchain Gaming, NFT Avatars And Collectibles, Fashion, Sport And More.",
    },
    {
      image: "/images/magazine2.png",
      title: "Every day, in every city and town across the country",
      createdBy: "by Damian Erdman",
      featuredAt: "October, 2021",
      text: "Discover the latest NFT and metaverse news fast, inclu musiblochain gaming, NFT avatars and collectibles, fashion, sport an more.Discover The Latest NFT And Metaverse News Fast, Including; Musi Blockchain Gaming, NFT Avatars And Collectibles, Fashion, Sport And More.",
    },
    {
      image: "/images/magazine9.png",
      title: "Every day, in every city and town across the country",
      createdBy: "by Damian Erdman",
      featuredAt: "October, 2021",
      text: "Discover the latest NFT and metaverse news fast, inclu musiblochain gaming, NFT avatars and collectibles, fashion, sport an more.Discover The Latest NFT And Metaverse News Fast, Including; Musi Blockchain Gaming, NFT Avatars And Collectibles, Fashion, Sport And More.",
    },
  ];
  return (
    <div className={styles.allMegazine}>
      <MagazineDetails {...magazines[0]} />
      <div>
        <div className={styles.titleAndSocialMedia}>
          <h4 className={`${styles.title} py-0`}>
            GET THE EMAIL NEWSLETTER AND UNLOCK ACCESS
          </h4>{" "}
          <div className={styles.socialMedia}>
            {socialMedia.map((el, i) => (
              <a
                className="socialMedia"
                href={el.to}
                target="_blank"
                key={i}
                rel="noreferrer"
              >
                {el.icon}
              </a>
            ))}
            <button className={styles.button}>
              <HiArrowRight /> Buy
            </button>
          </div>
        </div>
        <div className={styles.magazines}>
          {magazines.map((el, i) => (
            <div
              key={i}
              className={styles.magazine}
              style={{
                paddingLeft: i % 2 !== 0 && "8px",
                paddingRight: i % 2 === 0 && "8px",
              }}
            >
              <img src={el.image} alt="#" className={styles.image} />
              <h4 className={styles.title}>{el.title}</h4>
              <p className={`${styles.cratedByAndFeaturedAt} m-0`}>
                {el.createdBy}
              </p>
              <p className={`${styles.cratedByAndFeaturedAt} m-0`}>
                Featured — {el.featuredAt}
              </p>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default AllMagazine;

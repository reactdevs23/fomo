import React from "react";
import styles from "./styles.module.css";

const MoreContent = ({ image, title, createdBy, featuredAt }) => {
  const data = [
    {
      image: "/images/magazine11.png",
      title: "Your voice, your mind, your story, your vision",
      createdBy: " Damian Erdman in People",
      featuredAt: "Nov 2, 2021 ",
      duration: " 3 min",
    },

    {
      image: "/images/magazine5.png",
      title: "There’s always room for natural light",
      createdBy: "Damian Erdman in People",
      featuredAt: "Nov 2, 2021 ",
      duration: " 3 min",
    },
    {
      image: "/images/magazine6.png",
      title: "So I like that form, colors and light",
      createdBy: " Damian Erdman in People",
      featuredAt: "Nov 2, 2021 ",
      duration: " 3 min",
    },

    {
      image: "/images/magazine8.png",
      title: "Products is a visual art, and speak for themselves",
      createdBy: " Damian Erdman in People",
      featuredAt: "Nov 2, 2021 ",
      duration: " 3 min",
    },
  ];
  return (
    <div className={`${styles.moreContents} container`}>
      <div className={`${styles.contentContainer}  `}>
        {data.map((el, i) => (
          <div className={`${styles.contents} `} key={i}>
            <img src={el.image} alt="#" className={styles.image} />
            <h4 className={styles.title}>{el.title}</h4>
            <p className={styles.cratedByAndFeaturedAt}>by {el.createdBy}</p>
            <p className={styles.cratedByAndFeaturedAt}>
              {el.featuredAt} — {el.duration} read
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreContent;

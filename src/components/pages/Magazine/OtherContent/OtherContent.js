import React from "react";
import styles from "./styles.module.css";

const OtherContents = ({ image, title, createdBy, featuredAt }) => {
  const data = [
    {
      image: "/images/magazine4.png",
      title: "Creating is a privilege but it's also a gift",
      createdBy: " Nichole Becker and Daryl Wehner in Lifestyle",
      featuredAt: "Nov 2, 2021 ",
      duration: " 3 min",
      text: "Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdit at sodales a, sollicitudin nec risus.",
    },
    {
      image: "/images/magazine3.png",
      title: "Every story I create, creates me",
      createdBy: "Nichole Becker and Daryl Wehner in Lifestyle",
      featuredAt: "Nov 2, 2021 ",
      duration: " 3 min",
      text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec volutpat rhoncus quam, a feugiat elit gravida eget. Curabitur id pharetra ligula. Integer porttitor suscipit ante ac faucibus. Sed a enim non enim viverra pulvinar vel diam ut lorem congue feugiat.",
    },
  ];
  return (
    <div className={`${styles.otherContents} container`}>
      <h4 className={`${styles.heading} ${styles.title}`}>SEE Other Content</h4>
      <div className={styles.contentContainer}>
        {data.map((el, i) => (
          <div className={styles.contents} key={i}>
            <img src={el.image} alt="#" className={styles.image} />
            <h4 className={styles.title}>{el.title}</h4>
            <p className={styles.cratedByAndFeaturedAt}>by {el.createdBy}</p>
            <p className={styles.cratedByAndFeaturedAt}>
              {el.featuredAt} — {el.duration} read
            </p>
            <p className={styles.text}>{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherContents;

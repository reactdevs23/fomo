import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import styles from "./styles.module.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const data = [
    { text: "The 3-2-1 Thursday newsletter ", timePeriod: "Weekly" },
    {
      text: "Discount and offers on my books and products",
      timePeriod: "A few times per year",
    },
    {
      text: "Free subscriber-exclusive resources  ",
      timePeriod: "A few times per year",
    },
  ];
  const subsCribeFunction = (e) => {
    e.preventDefault();
  };
  return (
    <section className={styles.privilegeContainer}>
      <div className={`${styles.privilege} `}>
        <div className={styles.textContainer}>
          <h4 className={styles.title}>
            Creating is a privilege but it's also a gift
          </h4>
          <p className={styles.text}>
            Discover The Latest NFT And Metaverse News Fast, Including; Music,
            Blockchain Gaming, NFT Avatars And Collectibles, Fashion, Sport And
            More.
          </p>
          <div>
            {data.map((el, i) => (
              <div className={styles.listItem} key={i}>
                <span className={styles.iconContainer}>
                  {" "}
                  <AiOutlineCheck className={styles.icon} />
                </span>{" "}
                <p>
                  {" "}
                  {el.text}{" "}
                  <span className={styles.timePeriod}>({el.timePeriod})</span>
                </p>{" "}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contactBox}>
          <h4 className={styles.heading}>
            Add remarkable ideas and actionable insights to your inbox
          </h4>
          <form action="" className={styles.form}>
            {" "}
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <button className={styles.button} onSubmit={subsCribeFunction}>
              {" "}
              <HiArrowRight /> Subscribe
            </button>
          </form>
          <p className={styles.direction}>
            No Span. Just The Highest Quality Ideas You'll Find On The Web
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

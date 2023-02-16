import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const socialMedia = [
    { icon: "/images/twitter.svg", to: "#" },
    { icon: "/images/linkedin.svg", to: "#" },
    { icon: "/images/facebook.svg", to: "#" },
    { icon: "/images/tiktok.svg", to: "#" },
    { icon: "/images/instagram.svg", to: "#" },
  ];
  return (
    <section className="py-4">
      <div className="container mx-auto row  ">
        <div className="col-lg-6 py-4 py-lg-0">
          <h2 className="title">NFT News</h2>
          <p className="tagline">
            Discover the latest NFT and metaverse news fast, including; music,
            blockchain gaming, NFT avatars and collectibles, fashion, sport and
            more.
          </p>
        </div>

        <div className="fieldset col-lg-6 ">
          <p className="text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45
            BCContrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <div className="socialMedia">
            {socialMedia.map((el, i) => (
              <a
                className="socialMedia"
                href="#/"
                target="_blank"
                key={i}
                rel="noreferrer"
              >
                <img src={el.icon} alt="#" className="icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

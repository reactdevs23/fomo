import React from "react";

import Hero from "./hero/Hero";

import Subscribe from "./Subscribes/Subscribes";
import Trust from "./trust/Trust";

const Home = () => {
  return (
    <div>
      <Hero />

      <Trust />
      <Subscribe />
    </div>
  );
};

export default Home;

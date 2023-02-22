import React from "react";

import Hero from "./hero/Hero";

import Subscribe from "./Subscribe/Subscribe";
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

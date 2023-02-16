import React from "react";
import "./ArticleDetails.css";
import { useParams } from "react-router-dom";
const ArticleDetails = ({ data }) => {
  const { id } = useParams();
  return (
    <section className="wrapper">
      <div className="container article-details ">
        <div className="textBox">
          <h1>{data[id - 1].title}</h1>{" "}
          <p className="text">
            While futurists and fundraisers used to make bullish predictions
            about artificial general intelligence, they’ve become quieter
            lately. Peter Thiel — the tech billionaire and rumored vampire —
            says Silicon Valley big brains have lost enthusiasm for AGI.
          </p>
        </div>
        <img
          className="w-100 mt-4 image"
          src={data[id - 1].image}
          alt="releases"
        />
        <div className="imageAndText"></div>
        <div className="textBox">
          <h2 className="secondTitle">
            The AGI hype train has hit some heavy traffic.
          </h2>{" "}
          <p className="text py-3">{data[id - 1].text}</p>
          <p className="text">
            While futurists and fundraisers used to make bullish predictions
            about artificial general intelligence, they’ve become quieter
            lately. they’ve become quieter lately. Peter Thiel — the tech
            billionaire and rumored vampire — says Silicon Valley big brains
            have lost enthusiasm for AGI
          </p>{" "}
          <p className="text">
            While futurists and fundraisers used to make bullish predictions
            about artificial general intelligence, they’ve become quieter
            lately. Peter Thiel — the tech billionaire and rumored vampire —
            says Silicon Valley big brains have lost enthusiasm for AGI.
          </p>{" "}
          <h2 className="secondTitle">
            The AGI hype train has hit some heavy traffic.While futurists and
            fundraisers used to make bullish{" "}
          </h2>{" "}
          <p className="text py-3">{data[id - 1].text}</p>
          <p className="text">
            While futurists and fundraisers used to make bullish predictions
            about artificial general intelligence, they’ve become quieter
            lately. they’ve become quieter lately.
          </p>{" "}
          <p className="text">
            While futurists and fundraisers used to make bullish predictions
            about artificial general intelligence, they’ve become quieter
            lately. Peter Thiel — the tech billionaire and rumored vampire —
            says Silicon Valley big brains have lost enthusiasm for AGI.
          </p>{" "}
        </div>
      </div>
    </section>
  );
};

export default ArticleDetails;

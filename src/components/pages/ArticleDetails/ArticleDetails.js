import React from "react";
import "./ArticleDetails.css";
import { useParams } from "react-router-dom";
const ArticleDetails = ({ data }) => {
  const { id } = useParams();
  return (
    <section className="wrapper">
      <div className="container article-details ">
        <h1>{data[id - 1].title}</h1>
        <img
          className="w-100 mt-4 image"
          src={data[id - 1].image}
          alt="releases"
        />

        <p className="text py-3">{data[id - 1].text}</p>
      </div>
    </section>
  );
};

export default ArticleDetails;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import "./News.css";
import HeroSection from "./HeroSection/HeroSection";

const News = ({ data }) => {
  const [currentItems, setCurrentItems] = useState([]);

  return (
    <>
      <section className="news-wrapper">
        <HeroSection />
        <div className="container articles-container">
          <div className="articles py-5">
            {currentItems.map((el, i) => (
              <Link to={`/news/${i + 1}`} className="article-item" key={i}>
                <img className="w-100" src={el.image} alt={el.title} />
                <div className="px-3 py-4 ">
                  <h2>{el.title}</h2>
                  <span className="dateAndDuration">{el.date}</span>
                  <span className="dateAndDuration d-inline-block px-2">|</span>
                  <span className="dateAndDuration">{el.duration}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Pagination data={data} setCurrentItems={setCurrentItems} />
    </>
  );
};

export default News;

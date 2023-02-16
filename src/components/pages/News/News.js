import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import "./News.css";
import HeroSection from "./HeroSection/HeroSection";

const News = ({ data }) => {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
        </div>{" "}
        <div className="d-flex justify-content-center">
          {" "}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItemsCount={data.length}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
      </section>
    </>
  );
};

export default News;

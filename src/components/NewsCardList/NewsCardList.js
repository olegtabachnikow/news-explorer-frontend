import React from "react";
import "./NewsCardList.css";

function NewsCardList({ children }) {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <div className="news-card-list__container">{children}</div>
      <button className="news-card-list__button">Show more</button>
    </section>
  );
}

export default NewsCardList;

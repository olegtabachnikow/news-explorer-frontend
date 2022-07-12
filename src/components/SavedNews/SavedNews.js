import React from "react";
import { useNavigate } from "react-router";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ loggedIn }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    !loggedIn && navigate("/");
  }, [loggedIn, navigate]);
  return (
    <section className="saved-news">
      <SavedNewsHeader />
      <div className="saved-news__content">
      <div className="saved-news__cards">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      </div>
    </section>
  );
}
export default SavedNews;

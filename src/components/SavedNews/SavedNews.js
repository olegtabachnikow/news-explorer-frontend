import React from "react";
import { useNavigate } from "react-router";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ loggedIn, savedArticles }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    !loggedIn && navigate("/");
  }, [loggedIn, navigate]);
  return (
    <section className="saved-news">
      <SavedNewsHeader />
      <div className="saved-news__content">
        <div className="saved-news__cards">
          {savedArticles.length > 0 && savedArticles.map((card, i) => (
            <NewsCard key={i} card={card}/>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SavedNews;

import React from "react";
import { useNavigate } from "react-router";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedNews({ loggedIn }) {
  const currentUser = React.useContext(CurrentUserContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    !loggedIn && navigate("/");
  }, [loggedIn, navigate]);
  return (
    <section className="saved-news">
      <SavedNewsHeader />
      <div className="saved-news__content">
        <div className="saved-news__cards">
          {currentUser.articles.length > 0 && currentUser.articles.map((card, i) => (
            <NewsCard key={i} card={card}/>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SavedNews;

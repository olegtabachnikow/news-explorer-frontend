import React from "react";
import "./SavedNewsHeader.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedNewsHeader() {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <div className="saved-news-header">
      <span className="saved-news-header__subtitle">Saved articles</span>
      <h2 className="saved-news-header__title">
        {`${currentUser.name}, you have 5 saved articles`}
      </h2>
      <p className="saved-news-header__text">
        By keywords:{" "}
        <span className="saved-news-header__text_bold">
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </div>
  );
}
export default SavedNewsHeader;

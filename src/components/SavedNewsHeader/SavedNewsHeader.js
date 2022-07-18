import React from "react";
import "./SavedNewsHeader.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedNewsHeader() {
  const currentUser = React.useContext(CurrentUserContext);
  const [keywords, setKeywords] = React.useState([]);
  React.useEffect(() => {
    const arr = [];
    currentUser.articles.length > 0 &&
    currentUser.articles.forEach(card => {
        arr.push(card.keyword);
      });
      const newArr = new Set(arr);
      setKeywords(Array.from(newArr))
  }, [currentUser.articles])

  return (
    <div className="saved-news-header">
      <span className="saved-news-header__subtitle">Saved articles</span>
      <h2 className="saved-news-header__title">
        {`${currentUser.name}, you have ${currentUser.articles.length} saved articles`}
      </h2>
    {keywords.length && <p className="saved-news-header__text">
        By keywords: 
        <span className="saved-news-header__text_bold">
          {` ${keywords[0]}${keywords.length > 1 ? ', ' + keywords[1] : ''}${keywords.length > 3 ? `, and ${keywords.length - 2} other` : ''}`}
        </span>
      </p>}
    </div>
  );
}
export default SavedNewsHeader;
